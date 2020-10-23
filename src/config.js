const isProduction = process.env.NODE_ENV === 'production'
const clientId = isProduction ? 'e5c9cd9b2899ae50dc61' : 'e5c9cd9b2899ae50dc61'
const clientSecret = isProduction ? 'e0ba07e1cc20641e20dd426e267b40f7b28ae6ed' : 'e0ba07e1cc20641e20dd426e267b40f7b28ae6ed'

export default {
  clientId,
  clientSecret,
  localStorageKeys: {
    gistId: 'gitstars_gist_id',
    accessToken: 'gitstars_access_token',
    code: 'gitstars_code',
    user: 'gitstars_user',
  },
  filename: 'gitstars.json',
  description: `github stars manager for ${process.env.NODE_ENV}`,
  notify: {
    duration: 3000,
    showClose: false,
    position: 'bottom-right',
  },
  starredReposPerPage: 100, // Github 最大值
  i18nLocaleKey: 'gitstars_i18n_local',
  defaultTags: {
    all: { id: 0, i18nKey: 'allRepos', icon: 'fa-bars' },
    untagged: { id: -1, i18nKey: 'untaggedRepos', icon: 'fa-star-o' },
  },
  tagCategorys: {
    custom: { id: 0, name: '自定义', i18nKey: 'custom' },
    language: { id: 1, name: '语言', i18nKey: 'language' },
  },
  repoSorts: {
    time: { id: 0, sortKey: '_sortTime', name: '时间', i18nKey: 'time', icon: 'fa-clock-o' },
    star: { id: 1, sortKey: 'stargazers_count', name: 'star', icon: 'fa-star' },
  },
}
