import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const availableLangs = ['en', 'fr'];

export const scopeLoader = (importer, root = 'i18n') => {
    return availableLangs.reduce((acc, lang) => {
        acc[lang] = () => importer(lang, root);
        return acc;
    }, {});
};

const loader = scopeLoader((lang, root) => import(`../assets/${root}/${lang}.json`))

const scope = {
  scope: 'utils',
  alias: 'UTILS',
}

export const TRANSLOCO_PROVIDER = {
    provide: TRANSLOCO_SCOPE,
    useValue: {...scope, loader}
}

