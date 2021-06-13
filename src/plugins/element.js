import {
  ElButton,
  ElTooltip,
  ElPopper,
  ElInput,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElTabs,
  ElTabPane,
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'

export default (app) => {
  locale.use(lang)
  app.use(ElPopper)
  app.use(ElTooltip)
  app.use(ElButton)
  app.use(ElInput)
  app.use(ElAside)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElMain)
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItem)
  app.use(ElMenuItemGroup)
  app.use(ElTabs)
  app.use(ElTabPane)
}
