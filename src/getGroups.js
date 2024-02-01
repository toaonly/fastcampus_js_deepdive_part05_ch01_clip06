/**
 * @typedef Group
 * @prop {string} name
 * @prop {string} location
 * @prop {Group[]} subGroups
 *
 * @returns {Group[]}
 */
export default function getGroups() {
  return [
    {
      name: 'Alpha',
      location: 'New York',
      subGroups: [
        {
          name: 'Beta',
          location: 'Seoul',
          subGroups: [
            {
              name: 'Delta',
              location: 'New York',
              subGroups: [
                { name: 'Epsilon', location: 'Berlin' },
                { name: 'Zeta', location: 'London' },
              ],
            },
            { name: 'Gamma', location: 'Seoul' },
          ],
        },
        {
          name: 'Theta',
          location: 'Berlin',
          subGroups: [
            {
              name: 'Iota',
              location: 'New York',
              subGroups: [
                {
                  name: 'Kappa',
                  location: 'Seoul',
                  subGroups: [
                    { name: 'Lambda', location: 'Berlin' },
                    { name: 'Mu', location: 'London' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Omega',
      location: 'London',
      subGroups: [
        {
          name: 'Alpha2',
          location: 'Berlin',
          subGroups: [
            { name: 'Beta2', location: 'New York' },
            { name: 'Gamma2', location: 'Seoul' },
          ],
        },
      ],
    },
    {
      name: 'Sigma',
      location: 'Seoul',
      subGroups: [
        {
          name: 'Delta2',
          location: 'London',
          subGroups: [
            {
              name: 'Epsilon2',
              location: 'Berlin',
              subGroups: [
                { name: 'Zeta2', location: 'New York' },
                { name: 'Eta', location: 'Seoul' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Phi',
      location: 'Berlin',
      subGroups: [
        {
          name: 'Chi',
          location: 'New York',
          subGroups: [
            { name: 'Psi', location: 'Seoul' },
            {
              name: 'Omega2',
              location: 'London',
              subGroups: [
                {
                  name: 'Alpha3',
                  location: 'Berlin',
                  subGroups: [
                    { name: 'Beta3', location: 'Seoul' },
                    { name: 'Gamma3', location: 'New York' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]
}
