/* eslint-disable */
import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import * as locale from 'element-plus/lib/locale'

export default (app: any): any => {
  locale.use(lang)
  app.use(ElButton)
}
