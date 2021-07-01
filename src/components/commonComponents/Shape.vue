<template>
  <div class="Shape active" :class="{ balance: isBalance }" :style="getShapeStyle()" @mousedown="handleShapeMove">
    <span class="rotate el-icon-refresh-right" @mousedown="handleRotate"></span>
    <span class="move iconfont icon-arrows-alt"></span>
    <div
      class="point-item"
      v-for="item in pointsList"
      :style="getPointStyle(item)"
      @mousedown="handleMouseDownOnPoint($event, item)"
      :key="item"
    ></div>
    <slot :container_style="containerStyle"></slot>
  </div>
</template>

<script>
// import { getRotatedPointCoordinate } from '@/utils/translate';
import calculateComponentPositonAndSize from '@/utils/calculateComponentPositonAndSize';
import { mapState } from 'vuex';
import { mod360 } from '@/utils/translate';
export default {
  name: 'Shape',
  components: {},
  setup() {},
  data() {
    return {
      isBalance: true,
      shapeStyle: {},
      pointsList: ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'],
      angleToCursor: [
        // 每个范围的角度对应的光标
        { start: 338, end: 23, cursor: 'nw' },
        { start: 23, end: 68, cursor: 'n' },
        { start: 68, end: 113, cursor: 'ne' },
        { start: 113, end: 158, cursor: 'e' },
        { start: 158, end: 203, cursor: 'se' },
        { start: 203, end: 248, cursor: 's' },
        { start: 248, end: 293, cursor: 'sw' },
        { start: 293, end: 338, cursor: 'w' },
      ],
      initialAngle: {
        lt: 0,
        t: 45,
        rt: 90,
        r: 135,
        rb: 180,
        b: 225,
        lb: 270,
        l: 315,
      },
      containerStyle: {
        height: 400,
        width: 500,
        left: 30,
        top: 30,
        rotate: 0,
        backgroundColor: '#111',
      },
      cursors: {},
    };
  },
  created() {},
  beforeMount() {},
  mounted() {
    this.cursors = this.getCursor();
  },
  unmounted() {},
  watch: {},
  computed: {
    ...mapState({
      screenPosition: state => state.workbench.screen.position,
    }),
  },
  methods: {
    getCursor() {
      const { angleToCursor, initialAngle, pointsList, containerStyle } = this;
      const rotate = mod360(containerStyle.rotate); // 取余 360
      const result = {};
      let lastMatchIndex = -1; // 从上一个命中的角度的索引开始匹配下一个，降低时间复杂度
      pointsList.forEach(point => {
        const angle = mod360(initialAngle[point] + rotate);
        const len = angleToCursor.length;
        // eslint-disable-next-line no-constant-condition
        while (true) {
          lastMatchIndex = (lastMatchIndex + 1) % len;
          const angleLimit = angleToCursor[lastMatchIndex];
          if (angle < 23 || angle >= 338) {
            result[point] = 'nw-resize';
            return;
          }
          if (angleLimit.start <= angle && angle < angleLimit.end) {
            result[point] = angleLimit.cursor + '-resize';
            return;
          }
        }
      });
      return result;
    },
    getShapeStyle() {
      let { height, width, left, top, backgroundColor, rotate } = this.containerStyle;
      return {
        height: height + 'px',
        left: left + 'px',
        width: width + 'px',
        top: top + 'px',
        backgroundColor,
        transform: `rotate(${rotate}deg)`,
      };
    },
    handleShapeMove(e) {
      e.stopPropagation();
      const startY = e.clientY;
      const startX = e.clientX;
      const startTop = parseInt(this.containerStyle.top);
      const startLeft = parseInt(this.containerStyle.left);
      this.cursors = this.getCursor();
      let move = moveEvent => {
        const currX = moveEvent.clientX;
        const currY = moveEvent.clientY;
        this.containerStyle.top = currY - startY + startTop;
        this.containerStyle.left = currX - startX + startLeft;
      };
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    },
    getPointStyle(point) {
      const { width, height } = this.containerStyle;
      const hasT = /t/.test(point);
      const hasB = /b/.test(point);
      const hasL = /l/.test(point);
      const hasR = /r/.test(point);
      let newLeft = 0;
      let newTop = 0;
      if (point.length === 2) {
        newLeft = hasL ? 0 : width;
        newTop = hasT ? 0 : height;
      } else {
        if (hasT || hasB) {
          newLeft = width / 2;
          newTop = hasT ? 0 : height;
        }
        if (hasL || hasR) {
          newLeft = hasL ? 0 : width;
          newTop = Math.floor(height / 2);
        }
      }
      return {
        marginLeft: hasR ? '-4px' : '-4px',
        marginTop: '-4px',
        left: `${newLeft}px`,
        top: `${newTop}px`,
        cursor: this.cursors[point],
      };
    },
    handleMouseDownOnPoint(e, point) {
      const { width, height, top, left } = this.containerStyle;
      e.stopPropagation();
      const center = {
        x: this.screenPosition.left + 271 + left + width / 2,
        y: this.screenPosition.top + 71 + top + height / 2,
      };
      const clickPoint = {
        x: e.clientX,
        y: e.clientY,
      };
      const symmetricPoint = {
        x: center.x - (clickPoint.x - center.x),
        y: center.y - (clickPoint.y - center.y),
      };
      const move = moveEvent => {
        const curPositon = {
          x: moveEvent.clientX,
          y: moveEvent.clientY,
        };
        calculateComponentPositonAndSize(point, this.containerStyle, curPositon, {
          center,
          clickPoint,
          symmetricPoint,
          screenPosition: this.screenPosition,
        });
      };
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    },
    handleRotate(e) {
      e.stopPropagation();
      let pos = this.containerStyle;
      const startY = e.clientY;
      const startX = e.clientX;
      const startRotate = pos.rotate;
      let centerX = 0;
      let centerY = 0;
      if (this.$store.state.workbench.visitMode === 'Edit') {
        centerX = this.screenPosition.left + 271 + pos.left + pos.width / 2;
        centerY = this.screenPosition.top + 71 + pos.top + pos.height / 2;
      } else if (this.$store.state.workbench.visitMode === 'Preview') {
        centerX = pos.left + pos.width / 2;
        centerY = pos.top + pos.height / 2;
      }

      const rotateDegreeBefore = Math.atan2(startY - centerY, startX - centerX) / (Math.PI / 180);
      const move = moveEvent => {
        const currX = moveEvent.clientX;
        const currY = moveEvent.clientY;
        // 旋转后的角度
        const rotateDegreeAfter = Math.atan2(currY - centerY, currX - centerX) / (Math.PI / 180);

        // 获取旋转的角度值
        const endRotate = startRotate + rotateDegreeAfter - rotateDegreeBefore;

        if (Math.round(endRotate - 3) < 0 && Math.round(endRotate + 3) > 0) {
          this.isBalance = true;
          this.containerStyle.rotate = 0;
        } else if (Math.round((endRotate % 360) - 3) < 0 && Math.round((endRotate % 360) + 3) > 0) {
          this.isBalance = true;
          this.containerStyle.rotate = 0;
        } else if (Math.round((endRotate % 360) - 93) < 0 && Math.round((endRotate % 360) + 3) > 90) {
          this.isBalance = true;
          this.containerStyle.rotate = 90;
        } else if (Math.round(endRotate - 3) < 270 && Math.round(endRotate + 3) > 270) {
          this.isBalance = true;
          this.containerStyle.rotate = 270;
        } else if (Math.round(endRotate - 3) < -90 && Math.round(endRotate + 3) > -90) {
          this.isBalance = true;
          this.containerStyle.rotate = 270;
        } else if (Math.round(endRotate - 3) < 90 && Math.round(endRotate + 3) > 90) {
          this.isBalance = true;
          this.containerStyle.rotate = 90;
        } else if (Math.round(endRotate - 3) < 180 && Math.round(endRotate + 3) > 180) {
          this.isBalance = true;
          this.containerStyle.rotate = 180;
        } else {
          this.isBalance = false;
          this.containerStyle.rotate = endRotate;
        }
        // console.log('endRotate', endRotate);

        // 修改当前组件样式
      };
      const up = () => {
        this.cursors = this.getCursor();
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
        // this.cursors = this.getCursor() // 根据旋转角度获取光标位置
      };

      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    },
  },
};
</script>

<style lang="scss" scoped>
.Shape {
  position: absolute;
  user-select: none;
  .point-item {
    position: absolute;
    background: #fff;
    border: 1px solid #5981f9;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .rotate {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
    cursor: grab;
    color: #4472ff;
    font-size: 20px;
    &:active {
      cursor: grabbing;
    }
  }
  .move {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
    cursor: move;
    color: #4472ff;
    font-size: 20px;
  }
}

.active {
  border: 1px solid #a599ff;
}
.balance {
  border: 1px solid #14a9ff;
}
</style>
