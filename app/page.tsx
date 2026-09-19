import './lbz-styles.css'

const faqItems = [
  ['Что такое Lucky Bear Casino?', 'Lucky Bear Casino — информационная страница о бренде Lucky Bear Casino, играх, бонусах и формате онлайн-развлечений. Перед игрой всегда проверяйте доступность сервиса в вашей юрисдикции и условия конкретного предложения.'],
  ['Есть ли у Lucky Bear Casino официальный сайт?', 'Актуальный официальный сайт Lucky Bear Casino следует находить только через проверенные источники и внимательно сверять домен. Не вводите платёжные данные на страницах с подозрительными адресами или обещаниями гарантированного выигрыша.'],
  ['Можно ли играть с телефона?', 'Да, современные казино обычно адаптируют слоты, настольные игры и личный кабинет под мобильный браузер. Проверьте скорость соединения и используйте только защищённое подключение.'],
  ['Как работают бонусы казино?', 'Бонусы могут включать приветственные вращения, бездепозитные предложения и программы лояльности. Перед активацией изучите вейджер, сроки, максимальный вывод и список игр, которые участвуют в отыгрыше.'],
  ['Что делать, если сайт недоступен?', 'Сначала проверьте адрес, соединение и статус домена. Зеркало может использоваться для доступа при технических ограничениях, но переходить стоит только по ссылке из официального канала бренда.'],
]

export default function Page() {
  return (
    <div className="lbz-shell">
      <a className="lbz-skip-link" href="#content">Перейти к содержанию</a>
      <header className="lbz-topbar">
        <div className="lbz-topbar-inner">
          <a className="lbz-brand" href="#top" aria-label="Lucky Bear Casino — главная">
            <img className="lbz-brand-mark" src="/favicon.png" alt="" width="36" height="36" />
            <span className="lbz-brand-name">Lucky <span>Bear</span></span>
          </a>
          <nav className="lbz-nav" aria-label="Основная навигация">
            <a className="lbz-nav-link" href="#casino">Казино</a>
            <a className="lbz-nav-link" href="#slots">Слоты</a>
            <a className="lbz-nav-link" href="#bonus">Бонусы</a>
            <a className="lbz-nav-link" href="#faq">FAQ</a>
          </nav>
          <a className="lbz-cta-prim" href="#casino">Узнать больше</a>
        </div>
      </header>

      <main id="content">
        <section className="lbz-hero" id="top">
          <div className="lbz-wrap lbz-hero-inner">
            <img className="lbz-hero-art" src="/arts/lbz-hero-art.png" alt="Золотой медведь и игровые автоматы в атмосфере онлайн-казино" width="640" height="360" />
            <span className="lbz-hero-badge">LUCKY BEAR CASINO • ОНЛАЙН-РАЗВЛЕЧЕНИЯ</span>
            <h1 className="lbz-hero-title">Lucky Bear Casino — <span>играй с характером</span></h1>
            <p className="lbz-hero-sub">Обзор игр, слотов, бонусов и мобильного формата Lucky Bear Casino. Разбираемся, где искать официальный сайт, как отличить зеркало и на что обратить внимание перед регистрацией.</p>
            <div className="lbz-hero-actions">
              <a className="lbz-cta-prim" href="#slots">Смотреть игры</a>
              <a className="lbz-cta-sec" href="#bonus">Условия бонусов</a>
            </div>
          </div>
        </section>

        <section className="lbz-wrap lbz-stats" aria-label="Ключевые особенности">
          <div className="lbz-stat"><div className="lbz-stat-num">24/7</div><div className="lbz-stat-label">доступ с мобильных устройств</div></div>
          <div className="lbz-stat"><div className="lbz-stat-num">1000+</div><div className="lbz-stat-label">форматов и игровых сценариев</div></div>
          <div className="lbz-stat"><div className="lbz-stat-num">LIVE</div><div className="lbz-stat-label">настольные игры с дилерами</div></div>
          <div className="lbz-stat"><div className="lbz-stat-num">RNG</div><div className="lbz-stat-label">прозрачная механика слотов</div></div>
        </section>

        <section className="lbz-section" id="casino">
          <div className="lbz-wrap lbz-section-inner">
            <h2 className="lbz-section-title">Lucky Bear Casino: <span>что важно знать</span></h2>
            <p className="lbz-lead">Lucky Bear Casino — это современный формат онлайн-казино, в котором игровые автоматы, live-столы и бонусные предложения собраны в едином пространстве.</p>
            <p className="lbz-section-text">Запросы «lucky bear casino», «luckybear casino» и «luckybear casino официальный сайт» часто встречаются вместе, потому что игроки хотят быстро найти актуальную площадку и убедиться, что попали по правильному адресу. Безопасность начинается с проверки домена: смотрите на соединение HTTPS, правила проекта, контакты поддержки и доступность информации о лицензии.</p>
            <p className="lbz-section-text">Если основной адрес временно не открывается, пользователи ищут lucky bear casino зеркало. Зеркало — это альтернативный адрес с тем же интерфейсом, но он должен быть опубликован самим оператором. Не доверяйте случайным рекламным баннерам, где обещают «гарантированный выигрыш», мгновенное пополнение без проверки или скрытые условия вывода.</p>
            <p className="lbz-note">18+. Азартные игры связаны с риском финансовых потерь. Играйте ответственно, устанавливайте лимиты и проверяйте законодательство своей страны.</p>
          </div>
        </section>

        <section className="lbz-section lbz-section-alt" id="slots">
          <div className="lbz-wrap lbz-section-inner">
            <h2 className="lbz-section-title">Лаки бир казино: <span>игры для разных настроений</span></h2>
            <p className="lbz-section-text">В русскоязычных поисковых запросах бренд встречается как «лаки бир казино», «лакибир казино», «лаки бир казино онлайн» и «лаки бир казино сайт». Под этими формулировками обычно подразумевают подборку игровых автоматов и сервисов, доступных в веб-версии.</p>
            <div className="lbz-grid">
              <article className="lbz-tile">
                <img className="lbz-tile-art" src="/arts/lbz-slots-art.png" alt="Разнообразные слоты Lucky Bear Casino" width="560" height="300" loading="lazy" />
                <h3 className="lbz-tile-title">Слоты и джекпоты</h3>
                <p className="lbz-tile-text">Классические фрукты, приключенческие темы, механики с бесплатными вращениями и прогрессивные комбинации. Смотрите RTP, волатильность и таблицу выплат до запуска игры.</p>
                <ul className="lbz-tile-list"><li className="lbz-tile-item">популярные игровые автоматы</li><li className="lbz-tile-item">бонусные раунды и множители</li><li className="lbz-tile-item">демо-режим для знакомства</li></ul>
              </article>
              <article className="lbz-tile">
                <img className="lbz-tile-art" src="/arts/lbz-live-art.png" alt="Рулетка и live-казино с дилером" width="560" height="300" loading="lazy" />
                <h3 className="lbz-tile-title">Live-казино</h3>
                <p className="lbz-tile-text">Рулетка, блэкджек и баккара с ведущими в прямом эфире. Такой формат добавляет атмосферу настоящего игрового клуба, сохраняя удобство браузера.</p>
                <ul className="lbz-tile-list"><li className="lbz-tile-item">столы с разными лимитами</li><li className="lbz-tile-item">интерактивный чат и трансляция</li><li className="lbz-tile-item">понятные правила партий</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section className="lbz-section" id="bonus">
          <div className="lbz-wrap lbz-section-inner">
            <h2 className="lbz-section-title">Бонусы Lucky Bear: <span>читайте мелкий шрифт</span></h2>
            <p className="lbz-section-text">Поисковые фразы «лаки бир казино официальный», «лаки бир казино официальный сайт» и «лакибир казино официальный сайт» нередко связаны с поиском приветственного бонуса. Но привлекательный процент — не единственный критерий. Важнее реальные условия: минимальный депозит, срок действия, вейджер, максимальная ставка, игры с ограниченным вкладом и лимит вывода.</p>
            <div className="lbz-bonus-grid">
              <div className="lbz-bonus-tile"><div className="lbz-bonus-num">01</div><h3 className="lbz-bonus-title">Приветственный пакет</h3><p className="lbz-bonus-text">Проверьте требования к первому пополнению и срок активации.</p></div>
              <div className="lbz-bonus-tile"><div className="lbz-bonus-num">02</div><h3 className="lbz-bonus-title">Фриспины</h3><p className="lbz-bonus-text">Уточните, на каких слотах действуют вращения и когда начисляется выигрыш.</p></div>
              <div className="lbz-bonus-tile"><div className="lbz-bonus-num">03</div><h3 className="lbz-bonus-title">Лояльность</h3><p className="lbz-bonus-text">Регулярные игроки могут получать персональные акции и cashback.</p></div>
            </div>
            <div className="lbz-art-block"><img src="/arts/lbz-bonus-art.png" alt="Бонусы и монеты Lucky Bear Casino" width="1120" height="420" loading="lazy" /></div>
          </div>
        </section>

        <section className="lbz-section lbz-section-alt">
          <div className="lbz-wrap lbz-section-inner">
            <h2 className="lbz-section-title">Lucky Bear Casino <span>на телефоне</span></h2>
            <div className="lbz-grid">
              <div className="lbz-art-block"><img src="/arts/lbz-mobile-art.png" alt="Lucky Bear Casino на смартфоне" width="560" height="360" loading="lazy" /></div>
              <div>
                <p className="lbz-section-text">Запросы «лаки бир казино онлайн» и «лаки бир казино сайт» показывают, что игрокам важен быстрый доступ без установки отдельного приложения. Адаптивная веб-версия позволяет открыть кабинет на смартфоне, выбрать слот, проверить бонусный баланс и обратиться в поддержку.</p>
                <p className="lbz-section-text">Для комфортной игры используйте актуальный браузер, стабильную сеть и уникальный пароль. Включите двухфакторную защиту, если она доступна, и не передавайте код подтверждения другим людям.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="lbz-section" id="faq">
          <div className="lbz-wrap lbz-section-inner">
            <h2 className="lbz-section-title">Частые вопросы о <span>Lucky Bear Casino</span></h2>
            <div className="lbz-faq">
              {faqItems.map(([question, answer]) => <details className="lbz-faq-item" key={question}><summary className="lbz-faq-q">{question}</summary><p className="lbz-faq-a">{answer}</p></details>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="lbz-foot">
        <div className="lbz-wrap lbz-foot-inner">
          <div className="lbz-foot-brand"><img src="/favicon.png" alt="" width="32" height="32" /><span className="lbz-foot-brand-name">Lucky <span>Bear</span></span></div>
          <p className="lbz-foot-text">Информационный обзор Lucky Bear Casino: игры, слоты, мобильный формат, бонусы и советы по безопасному выбору официального сайта. Материал не является финансовой рекомендацией или приглашением нарушать закон.</p>
          <div className="lbz-foot-tags"><a className="lbz-foot-tag" href="#casino">lucky bear casino</a><a className="lbz-foot-tag" href="#casino">luckybear casino</a><a className="lbz-foot-tag" href="#slots">лаки бир казино</a><a className="lbz-foot-tag" href="#bonus">лакибир казино</a><a className="lbz-foot-tag" href="#faq">официальный сайт</a></div>
          <p className="lbz-foot-copy">© 2026 Lucky Bear Casino Guide • 18+ • Играйте ответственно</p>
        </div>
      </footer>
    </div>
  )
}
