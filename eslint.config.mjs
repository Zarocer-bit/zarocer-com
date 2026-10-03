import js from '@eslint/js';
import ts from 'typescript-eslint';
export default ts.config({ignores:['dist/**','node_modules/**','qa/**']},js.configs.recommended,...ts.configs.recommended,{files:['**/*.{js,mjs,ts}'],languageOptions:{globals:{console:'readonly',process:'readonly',Buffer:'readonly',URL:'readonly',document:'readonly',window:'readonly',IntersectionObserver:'readonly',requestAnimationFrame:'readonly',matchMedia:'readonly',HTMLElement:'readonly',navigator:'readonly'}}});
