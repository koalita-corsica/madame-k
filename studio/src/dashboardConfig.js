export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f887c90609fb51850505735',
                  title: 'Sanity Studio',
                  name: 'madame-k-studio',
                  apiId: 'b73e99e6-7586-4939-aedc-1f3286ca33f0'
                },
                {
                  buildHookId: '5f887c902b265215d1b12878',
                  title: 'Blog Website',
                  name: 'madame-k',
                  apiId: '36701fec-c98e-4aec-bbe7-f1635c29fc1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koalita-corsica/madame-k',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://madame-k.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
