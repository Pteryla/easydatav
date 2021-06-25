
function angleToRadian(angle) {
    return angle * Math.PI / 180
}


export function calculateRotatedPointCoordinate(point, center, rotate) {

    return {
        x: (point.x - center.x) * Math.cos(angleToRadian(rotate)) - (point.y - center.y) * Math.sin(angleToRadian(rotate)) + center.x,
        y: (point.x - center.x) * Math.sin(angleToRadian(rotate)) + (point.y - center.y) * Math.cos(angleToRadian(rotate)) + center.y,
    }
}

export function getRotatedPointCoordinate(style, center, name) {
    let point // point 是未旋转前的坐标
    switch (name) {
        case 't':
            point = {
                x: style.left + (style.width / 2),
                y: style.top,
            }

            break
        case 'b':
            point = {
                x: style.left + (style.width / 2),
                y: style.top + style.height,
            }

            break
        case 'l':
            point = {
                x: style.left,
                y: style.top + style.height / 2,
            }

            break
        case 'r':
            point = {
                x: style.left + style.width,
                y: style.top + style.height / 2,
            }

            break
        case 'lt':
            point = {
                x: style.left,
                y: style.top,
            }

            break
        case 'rt':
            point = {
                x: style.left + style.width,
                y: style.top,
            }

            break
        case 'lb':
            point = {
                x: style.left,
                y: style.top + style.height,
            }

            break
        default: // rb
            point = {
                x: style.left + style.width,
                y: style.top + style.height,
            }

            break
    }

    return calculateRotatedPointCoordinate(point, center, style.rotate)
}

// 求两点之间的中点坐标
export function getCenterPoint(p1, p2) {
    return {
        x: p1.x + ((p2.x - p1.x) / 2),
        y: p1.y + ((p2.y - p1.y) / 2),
    }
}

export function sin(rotate) {
    return Math.abs(Math.sin(angleToRadian(rotate)))
}

export function cos(rotate) {
    return Math.abs(Math.cos(angleToRadian(rotate)))
}
export function mod360(deg) {
    return (deg + 360) % 360
}