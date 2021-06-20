<template>
  <div class="Shape active" :style="getShapeStyle()" @mousedown="handleShapeMove">
    <span class="rotate el-icon-refresh-right" @mousedown="handleRotate"></span>
    <span class="move iconfont icon-arrows-alt"></span>
    <div
      class="point-item"
      v-for="item in pointsList"
      :style="getPointStyle(item)"
      @mousedown="handleMouseDownOnPoint($event, item)"
      :key="item"
    ></div>
    <div class="container">container</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Shape',
  components: {},
  setup() {},
  data() {
    return {
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
      initPointsAngle: {},
      containerStyle: {
        height: 100,
        width: 300,
        left: 30,
        top: 30,
        rotate: 0,
        backgroundColor: '#111',
      },
    };
  },
  created() {},
  beforeMount() {},
  mounted() {},
  unmounted() {},
  watch: {},
  computed: {
    ...mapState({
      screenPosition: state => state.workbench.screen.position,
    }),
  },
  methods: {
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
      // console.log(point);
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
        // cursor: this.cursors[point],
      };
    },
    handleMouseDownOnPoint(e, point) {
      const { width, height, top, left } = this.containerStyle;
      e.stopPropagation();
      const startX = e.clientX;
      const startY = e.clientY;

      // console.log('screenPosition', this.screenPosition);
      // console.log('containerStyle', this.containerStyle);

      const center = {
        x: this.screenPosition.left + 271 + left + width / 2,
        y: this.screenPosition.top + 71 + top + height / 2,
      };

      console.log('center', center);

      const clickPoint = {
        x: e.clientX,
        y: e.clientY,
      };

      console.log('clickPoint', clickPoint);

      const symmetricPoint = {
        x: center.x - (clickPoint.x - center.x),
        y: center.y - (clickPoint.y - center.y),
      };

      console.log(symmetricPoint);

      const move = moveEvent => {
        const currX = moveEvent.clientX;
        const currY = moveEvent.clientY;
        const disY = currY - startY;
        const disX = currX - startX;
        const hasT = /t/.test(point);
        const hasB = /b/.test(point);
        const hasL = /l/.test(point);
        const hasR = /r/.test(point);
        let newHeight = height + (hasT ? -disY : hasB ? disY : 0);
        let newWidth = width + (hasL ? -disX : hasR ? disX : 0);
        newHeight = newHeight > 0 ? newHeight : 0;
        newWidth = newWidth > 0 ? newWidth : 0;
        const newLeft = left + (hasL ? disX : 0);
        const newTop = top + (hasT ? disY : 0);

        const curPoint = {
          x: moveEvent.clientX,
          y: moveEvent.clientY,
        };

        function getCenterPoint(p1, p2) {
          return {
            x: p1.x + (p2.x - p1.x) / 2,
            y: p1.y + (p2.y - p1.y) / 2,
          };
        }
        function angleToRadian(angle) {
          return (angle * Math.PI) / 180;
        }

        if (Math.round(this.containerStyle.rotate) === 0) {
          this.containerStyle.width = newWidth;
          this.containerStyle.height = newHeight;
          this.containerStyle.top = newTop;
          this.containerStyle.left = newLeft;
        }

        function calculateRotatedPointCoordinate(point, center, rotate) {
          return {
            x:
              (point.x - center.x) * Math.cos(angleToRadian(rotate)) -
              (point.y - center.y) * Math.sin(angleToRadian(rotate)) +
              center.x,
            y:
              (point.x - center.x) * Math.sin(angleToRadian(rotate)) +
              (point.y - center.y) * Math.cos(angleToRadian(rotate)) +
              center.y,
          };
        }

        function calculateLeftTop(containerStyle, curPoint, symmetricPoint) {
          const newCenterPoint = getCenterPoint(curPoint, symmetricPoint);
          console.log('newCenterPoint', newCenterPoint);
          const newTopLeftPoint = calculateRotatedPointCoordinate(curPoint, newCenterPoint, -containerStyle.rotate);
          const newBottomRightPoint = calculateRotatedPointCoordinate(
            symmetricPoint,
            newCenterPoint,
            -containerStyle.rotate,
          );
          const newWidth = newBottomRightPoint.x - newTopLeftPoint.x;
          const newHeight = newBottomRightPoint.y - newTopLeftPoint.y;

          console.log(`calculateLeftTop  newWidth ${newWidth}  newHeight ${newHeight}`);
          if (newWidth > 0 && newHeight > 0) {
            return {
              width: Math.round(newWidth),
              height: Math.round(newHeight),
              left: Math.round(newTopLeftPoint.x),
              top: Math.round(newTopLeftPoint.y),
            };
          } else {
            return null;
          }
        }
        const newPos = calculateLeftTop(this.containerStyle, curPoint, symmetricPoint);
        if (newPos) {
          let { left, top, width, height } = newPos;
          this.containerStyle.width = width;
          this.containerStyle.height = height;
          this.containerStyle.top = top;
          this.containerStyle.left = left;

          console.log('newPos', newPos);
        }
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

      const centerX = this.screenPosition.left + 271 + pos.left + pos.width / 2;
      const centerY = this.screenPosition.top + 71 + pos.top + pos.height / 2;

      const rotateDegreeBefore = Math.atan2(startY - centerY, startX - centerX) / (Math.PI / 180);
      const move = moveEvent => {
        const curX = moveEvent.clientX;
        const curY = moveEvent.clientY;
        // 旋转后的角度
        const rotateDegreeAfter = Math.atan2(curY - centerY, curX - centerX) / (Math.PI / 180);
        // 获取旋转的角度值
        this.containerStyle.rotate = startRotate + rotateDegreeAfter - rotateDegreeBefore;
        // 修改当前组件样式
      };
      const up = () => {
        console.log(this.containerStyle);
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
  border: 1px solid #796bf8;
}
</style>
