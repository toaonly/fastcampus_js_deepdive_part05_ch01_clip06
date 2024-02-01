export default function renderApp() {
  const app = document.querySelector('#app')

  app.innerHTML += `
    <div class="flex divide-x">
      <div class="p-8">
        <button id="btn-find" class="px-3 py-2 rounded-md bg-blue-600 text-sm text-white">Location: Seoul 찾기</button>

        <div class="group flex flex-col gap-2 p-4">
          <div>
            <div>
              <div class="font-semibold group-name">Name: Alpha</div>
              <div class="text-sm group-location">Location: New York</div>
            </div>
            <div class="group flex flex-col gap-2 p-4">
              <div>
                <div>
                  <div class="font-semibold group-name">Name: Beta</div>
                  <div class="text-sm group-location">Location: Seoul</div>
                </div>
                <div class="group flex flex-col gap-2 p-4">
                  <div>
                    <div>
                      <div class="font-semibold group-name">Name: Delta</div>
                      <div class="text-sm group-location">Location: New York</div>
                    </div>
                    <div class="group flex flex-col gap-2 p-4">
                      <div>
                        <div>
                          <div class="font-semibold group-name">Name: Epsilon</div>
                          <div class="text-sm group-location">Location: Berlin</div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div class="font-semibold group-name">Name: Zeta</div>
                          <div class="text-sm group-location">Location: London</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div class="font-semibold group-name">Name: Gamma</div>
                      <div class="text-sm group-location">Location: Seoul</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div class="font-semibold group-name">Name: Theta</div>
                  <div class="text-sm group-location">Location: Berlin</div>
                </div>
                <div class="group flex flex-col gap-2 p-4">
                  <div>
                    <div>
                      <div class="font-semibold group-name">Name: Iota</div>
                      <div class="text-sm group-location">Location: New York</div>
                    </div>
                    <div class="group flex flex-col gap-2 p-4">
                      <div>
                        <div>
                          <div class="font-semibold group-name">Name: Kappa</div>
                          <div class="text-sm group-location">Location: Seoul</div>
                        </div>
                        <div class="group flex flex-col gap-2 p-4">
                          <div>
                            <div>
                              <div class="font-semibold group-name">Name: Lambda</div>
                              <div class="text-sm group-location">Location: Berlin</div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div class="font-semibold group-name">Name: Mu</div>
                              <div class="text-sm group-location">Location: London</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-8">1</div>
    </div>
  `

  const findAllSeoulAndMarkYellow = () => {
    function search(elements) {
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i]

        if (el.textContent === 'Location: Seoul') {
          el.classList.add('bg-yellow-200')
          el.classList.add('transition-colors')

          setTimeout(() => {
            el.classList.remove('bg-yellow-200')
          }, 2000)
        }

        search(el.childNodes)
      }
    }

    search([app])
  }

  const btnFind = document.querySelector('#btn-find')

  btnFind.addEventListener('click', () => {
    findAllSeoulAndMarkYellow()
  })
}
