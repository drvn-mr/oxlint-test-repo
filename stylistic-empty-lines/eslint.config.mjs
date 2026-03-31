import stylistic from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';

const stylisticCustomizeOptions = {
  semi: true,
  jsx: false,
  braceStyle: '1tbs',
  arrowParens: true,
};

export default defineConfig(
  stylistic.configs.customize(stylisticCustomizeOptions),
  ...pluginVue.configs['flat/recommended'],
);
