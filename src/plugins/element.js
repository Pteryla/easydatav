import {
  ElAside,
  ElButton,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
} from 'element-plus';
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
};
