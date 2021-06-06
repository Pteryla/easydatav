import {
  ElAside,
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElTabs,
  ElTabPane,
  ElTooltip,
  ElPopper,
  ElInput,
} from 'element-plus';
import '@/scss/element-variables.scss';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import locale from 'element-plus/lib/locale';

export default app => {
  locale.use(lang);
  app.use(ElButton);
  app.use(ElContainer);
  app.use(ElMain);
  app.use(ElAside);
  app.use(ElHeader);
  app.use(ElMenu);
  app.use(ElSubmenu);
  app.use(ElMenuItem);
  app.use(ElMenuItemGroup);
  app.use(ElTabs);
  app.use(ElTabPane);
  app.use(ElTooltip);
  app.use(ElPopper);
  app.use(ElInput);
};
