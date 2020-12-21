/*
 * 给当前标签添加水印背景
 * text 文字
 * textColor 文字颜色
 * textFont 字体
*/
export const vwaterMarker = (el, binding) => {
  function addWaterMarker(parentNode, { text, textColor, textFont }) {
    if (!binding.value) return
    const canvas = document.createElement('canvas')
    parentNode.appendChild(canvas)
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight
    canvas.style.display = 'none'

    const y = 40
    const x = text.length * 10
    const yNum = (document.documentElement.clientHeight / y) + 3
    const xNum = (document.documentElement.clientWidth / x).toFixed(0)
    const deg = -30

    const ctx = canvas.getContext('2d')
    ctx.rotate((deg * Math.PI) / 180)
    ctx.font = textFont || '12px PingFangSC, PingFangSC-Regular'
    ctx.fillStyle = textColor || 'rgba(233, 236, 240, 1)'
    ctx.textBaseline = 'Middle'

    for (let j = -xNum; j < xNum; j++) {
      for (let i = 0; i < yNum; i++) {
        ctx.fillText(text, j * x, i * y)
      }
    }

    parentNode.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`
  }
  addWaterMarker(el, binding.value)
}
