const shopPage = document.querySelector('.shop-page');
const oldScentEntry = shopPage?.querySelector('.shop-discovery[aria-labelledby="scent-title"]');
if (shopPage) {
  shopPage.querySelector('.shop-intro__image')?.remove();
  const introCopy = shopPage.querySelector('.shop-intro__copy');
  if (introCopy) introCopy.innerHTML = '<p class="section-label">SHOP</p><h1 id="shop-title">香りを探す、買う。</h1><p>香り・ブランド・ものづくりから選べます。</p>';
}
if (shopPage && oldScentEntry) {
  const shopSearch = shopPage.querySelector('.shop-search');
  if (shopSearch) {
    shopSearch.innerHTML = '<div class="shop-section-heading"><p class="section-label">SEARCH</p><h2 id="search-title">香水・香り・ブランドを検索</h2></div><form class="shop-search__form" id="shop-keyword-search"><label for="shop-search-input">商品名・ブランド名・香りの系統から探す</label><div><input id="shop-search-input" name="q" type="search" placeholder="HATENKO / ひのき / ウッディ"><button type="submit" aria-label="検索">→</button></div><p class="shop-search__hint">例：HATENKO、WANOWA、PERFUMERS、ひのき、柑橘、香水</p></form><div class="shop-search-results" aria-live="polite"></div>';
  }
  const section = document.createElement('section');
  section.className = 'shop-scent-directory';
  section.setAttribute('aria-labelledby', 'shop-scent-title');
  const categories = [
    ['fruits', 'FRUITS', 'フルーツ系', '../images/experience/scents/scent-08-cassis.jpg'], ['citrus', 'CITRUS', 'シトラス系', '../images/experience/scents/scent-02-lemon.jpg'],
    ['herbal', 'HERBAL', 'ハーバル系', '../images/experience/scents/scent-04-lavender.jpg'], ['floral', 'FLORAL', 'フローラル系', '../images/experience/scents/scent-09-magnolia.jpg'],
    ['spice', 'SPICE', 'スパイス系', '../images/products/kou-kanpo-editorial.png'], ['tea', 'TEA', 'ティー系', '../images/experience/scents/scent-07-assam-tea.jpg'],
    ['woody', 'WOODY', 'ウッディ系', '../images/experience/scents/scent-12-sandalwood.jpg'], ['imaginal', 'IMAGINAL', 'イマジナル系', '../images/materials-scent.png'],
    ['animal', 'ANIMAL', 'アニマル系', '../images/experience/scents/scent-10-musk.jpg'], ['gourmand', 'GOURMAND', 'グルマン系', '../images/products/perfumers-fig-editorial.png'],
    ['essential-oil', 'ESSENTIAL OIL', '精油', '../images/products/wanowa-noto-hiba-editorial.png']
  ];
  section.innerHTML = `<div class="shop-scent-directory__heading"><p class="section-label">FIND BY SCENT</p><h1 id="shop-scent-title">香りから選ぶ</h1><p>気分やシーンに合わせて、香りの世界からお選びください。</p></div><div class="shop-scent-directory__grid">${categories.map(([slug, en, ja, image]) => `<a class="scent-category-card" href="scent/${slug}/"><img src="${image}" alt="${ja}"><span><strong>${en}</strong><em>${ja}</em><b>→</b></span></a>`).join('')}</div><p class="shop-scent-directory__count">全11件のカテゴリ</p>`;
  oldScentEntry.replaceWith(section);
}

const shopBrandTrack = document.querySelector('.shop-page .shop-brand-track');
if (shopBrandTrack) {
  shopBrandTrack.className = 'shop-brand-gallery';
  shopBrandTrack.innerHTML = '<article class="shop-brand-feature shop-brand-feature--hatenko"><a class="shop-brand-feature__image" href="brand/hatenko/"><img src="../images/products/source-hatenko-hanabi.jpg" alt="HATENKO / 破天荒"></a><div class="shop-brand-feature__copy"><p class="section-label">HATENKO / 破天荒</p><h3>香りが導く、伝統と革新で型を破る未来</h3><p>日本の文化や土地の記憶を香りに重ねた、inimuを代表する香水ブランド。</p><span>代表的な香水：花火 / 磯波 / おどろおどろ</span><a class="shop-text-link" href="brand/hatenko/">HATENKOを見る →</a></div></article><article class="shop-brand-feature"><a class="shop-brand-feature__image" href="brand/wanowa/"><img src="../images/shop/brands/wanowa-atmosphere.png" alt="WANOWA"></a><div class="shop-brand-feature__copy"><p class="section-label">WANOWA</p><h3>土地と素材から生まれる香り</h3><p>地域の素材や記憶を手がかりにした香りのプロダクト。</p><span>代表商品：能登ひばルームスプレー</span><a class="shop-text-link" href="brand/wanowa/">WANOWAを見る →</a></div></article><article class="shop-brand-feature"><a class="shop-brand-feature__image" href="brand/perfumers/"><img src="../images/shop/brands/perfumers-atmosphere.png" alt="PERFUMERS"></a><div class="shop-brand-feature__copy"><p class="section-label">PERFUMERS</p><h3>日々に寄り添う、身につける香り</h3><p>オードトワレやロールオンなど、さまざまな形で楽しむ香り。</p><span>代表商品：オードトワレ / ロールオンパフューム</span><a class="shop-text-link" href="brand/perfumers/">PERFUMERSを見る →</a></div></article>';
}

const shopBrandsSection = document.querySelector('.shop-page .shop-brands');
if (shopBrandsSection && !document.querySelector('.shop-featured-stories')) {
  const stories = document.createElement('section');
  stories.className = 'shop-featured-stories';
  stories.innerHTML = '<div class="shop-section-heading"><p class="section-label">TWO SIGNATURES</p><h2>inimuをかたちづくる、二つの香り</h2></div><div class="shop-featured-stories__list"><article><a class="shop-featured-stories__image" href="story/hatenko/"><img src="../images/products/source-hatenko-hanabi.jpg" alt="HATENKO / 破天荒"></a><div><p class="section-label">01 / HATENKO</p><h3>伝統と革新で、型を破る香り。</h3><p>加賀友禅、東濃檜、浮世絵、職人技。<br>異なる領域を結びつける、破天荒のものづくり。</p><a class="shop-text-link" href="story/hatenko/">HATENKO STORY →</a></div></article><article><a class="shop-featured-stories__image" href="story/wanowa/"><img src="../images/products/wanowa-noto-hiba-editorial.png" alt="WANOWA"></a><div><p class="section-label">02 / WANOWA</p><h3>土地と素材から生まれる香り。</h3><p>国造ゆず、加子母ひのき、和束茶など、<br>日本各地の植物と背景を香りとして届ける。</p><a class="shop-text-link" href="story/wanowa/">WANOWA STORY →</a></div></article></div>';
  shopBrandsSection.parentNode.insertBefore(stories, shopBrandsSection);
  const itemDiscovery = document.querySelector('.shop-page .shop-discovery[aria-labelledby="item-title"]');
  if (itemDiscovery) stories.parentNode.insertBefore(itemDiscovery, shopBrandsSection);
}

document.querySelectorAll('.shop-page .shop-brand-feature--hatenko img, .shop-page .shop-featured-stories__list article:first-child img').forEach((image) => { image.src = '../images/hatenko.png'; });

const shopMain = document.querySelector('.shop-page main');
if (shopMain) {
  const orderedSections = [
    shopMain.querySelector('.shop-intro'),
    shopMain.querySelector('.shop-featured-stories'),
    shopMain.querySelector('.shop-scent-directory'),
    shopMain.querySelector('.shop-discovery[aria-labelledby="item-title"]'),
    shopMain.querySelector('.shop-brands'),
    shopMain.querySelector('.shop-search'),
    shopMain.querySelector('.shop-new'),
    shopMain.querySelector('.shop-all'),
    shopMain.querySelector('.make-scent-bridge')
  ].filter(Boolean);
  orderedSections.forEach((section) => shopMain.appendChild(section));
  const productKey = new URLSearchParams(window.location.search).get('product');
  if (productKey && !shopMain.querySelector('.product-experience-bridge')) {
    const bridge = document.createElement('section');
    bridge.className = 'product-experience-bridge';
    bridge.innerHTML = '<p class="section-label">MAKE YOUR SCENT</p><h2>この香りが好きなら、<br>自分だけの香りをつくってみる。</h2><a class="shop-text-link" href="../experience/">EXPERIENCE →</a>';
    shopMain.appendChild(bridge);
  }
}

const signatureStories = document.querySelector('.shop-featured-stories');
if (signatureStories && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  signatureStories.classList.add('has-reveal');
  const storyReveal = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .01, rootMargin: '0px 0px -8% 0px' });
  signatureStories.querySelectorAll('.shop-featured-stories__list article').forEach((article) => storyReveal.observe(article));
}

const shopKeywordForm = document.querySelector('#shop-keyword-search');
if (shopKeywordForm) {
  const searchableProducts = [...document.querySelectorAll('.shop-page .product-track a, .shop-page .product-grid a')];
  searchableProducts.forEach((item) => { item.dataset.search = `${item.textContent} ${item.querySelector('img')?.alt || ''}`; });
  const result = shopKeywordForm.parentElement.querySelector('.shop-search-results');
  const runSearch = (value) => {
    const keyword = value.trim().toLowerCase();
    searchableProducts.forEach((item) => { item.hidden = Boolean(keyword) && !item.dataset.search.toLowerCase().includes(keyword); });
    if (result) result.textContent = keyword ? `${searchableProducts.filter((item) => !item.hidden).length}件の商品が見つかりました。` : '';
  };
  shopKeywordForm.addEventListener('submit', (event) => { event.preventDefault(); runSearch(new FormData(shopKeywordForm).get('q') || ''); });
}

const navigation = document.querySelector('.site-nav');
const mainScript = document.querySelector('script[src$="js/main.js"]');
const siteRoot = mainScript ? new URL('./', new URL(mainScript.getAttribute('src'), window.location.href)).href : './';
const isTopPage = Boolean(document.querySelector('.wayfinding'));
if (!isTopPage) document.querySelectorAll('.site-footer').forEach((footer) => footer.remove());
const footerBrand = isTopPage ? '<span class="site-footer__logo">inimu</span>' : `<a class="site-footer__logo" href="${siteRoot}">inimu</a>`;
document.querySelectorAll('.site-footer').forEach((footer) => {
  footer.innerHTML = `<div class="site-footer__inner"><div class="site-footer__brand"><span class="site-footer__logo">inimu</span><p>〒111-0032<br>東京都台東区浅草2丁目1-5</p></div><div class="site-footer__company"><a href="https://kyarainnovate.jp/company/" target="_blank" rel="noopener noreferrer">会社概要 ↗</a></div><p class="site-footer__copyright">© inimu</p></div>`;
});
const loginRegister = null;
if (loginRegister && !loginRegister.querySelector('.login-register__welcome')) {
  const welcome = document.createElement('div');
  welcome.className = 'login-register__welcome';
  welcome.setAttribute('aria-hidden', 'true');
  welcome.innerHTML = '<span>いらっしゃい。</span><i></i>';
  loginRegister.insertBefore(welcome, loginRegister.querySelector('.text-link'));
  const reveal = new IntersectionObserver((entries, observer) => {
    if (entries.some((entry) => entry.isIntersecting)) { loginRegister.classList.add('is-visible'); observer.disconnect(); }
  }, { threshold: .35 });
  reveal.observe(loginRegister);
}
const menuToggle = document.querySelector('.site-nav__toggle');
const navigationLinks = document.querySelectorAll('.site-nav__list a');

document.querySelectorAll('.way-card').forEach((card) => {
  card.addEventListener('click', (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    event.preventDefault();
    card.classList.add('is-leaving');
    window.setTimeout(() => { window.location.href = card.href; }, 220);
  });
});

const blogMain = document.querySelector('.blog-main');
if (blogMain) {
  blogMain.innerHTML = '<section class="blog-heading"><p class="section-label">BLOG</p><h1>出来事や読みもの</h1><p>inimuで起きていること、香りや素材にまつわることをまとめています。</p></section><section class="blog-index-list" aria-label="記事一覧"><a class="blog-index-entry blog-index-entry--featured" href="wanowa-noto-hiba/"><div class="blog-index-entry__image"><img src="../images/products/wanowa-noto-hiba-editorial.png" alt="WANOWA 能登ひばスプレー"></div><div class="blog-index-entry__copy"><span>FEATURED / STORY</span><h2>WANOWA能登ひばスプレー</h2><p>石川県能登半島の復興支援として紹介された、能登ひばのルームスプレー。</p><b>続きを読む →</b></div></a><a class="blog-index-entry" href="asakusa-project/"><div class="blog-index-entry__image"><img src="../images/materials-scent.png" alt="馨る浅草プロジェクト"></div><div class="blog-index-entry__copy"><span>COLLABORATION / STORY</span><h2>馨る浅草プロジェクト</h2><p>協力店に四季の香りを設置し、浅草を香りでめぐる取り組み。</p><b>続きを読む →</b></div></a><a class="blog-index-entry" href="asakusa-store/"><div class="blog-index-entry__image"><img src="../images/access-image.png" alt="inimu浅草店"></div><div class="blog-index-entry__copy"><span>NEWS</span><h2>inimu浅草店</h2><p>浅草2丁目にある、香りとものづくりに出会う体験型ストア。</p><b>続きを読む →</b></div></a><a class="blog-index-entry" href="asakusa-open/"><div class="blog-index-entry__image"><img src="../images/1shop-door.png" alt="浅草にinimuがOPEN"></div><div class="blog-index-entry__copy"><span>NEWS / ARCHIVE</span><h2>浅草にinimuがOPEN</h2><p>2023年8月26日のオープンと、店づくりの背景を紹介する過去記事。</p><b>続きを読む →</b></div></a><a class="blog-index-entry" href="2nd-anniversary/"><div class="blog-index-entry__image"><img src="../images/experience-workshop.png" alt="inimu二周年祭イベント"></div><div class="blog-index-entry__copy"><span>EVENT / ARCHIVE</span><h2>inimu二周年祭イベント</h2><p>限定セットや和精油のワークショップなど、二周年の企画を振り返る記事。</p><b>続きを読む →</b></div></a><a class="blog-index-entry" href="tokyo-rickshaw-2025/"><div class="blog-index-entry__image"><img src="../images/2shop-door.png" alt="inimuと東京力車のコラボレーション"></div><div class="blog-index-entry__copy"><span>COLLABORATION / ARCHIVE</span><h2>inimu×東京力車 コラボレーション 2025</h2><p>俥夫が作った香りをうちわで届けた、過去の夏季限定イベント。</p><b>続きを読む →</b></div></a><a class="blog-index-entry" href="sale/"><div class="blog-index-entry__image"><img src="../images/shop-intro-hero.png" alt="SALE"></div><div class="blog-index-entry__copy"><span>SALE</span><h2>SALE・キャンペーン情報</h2><p>公式サイトに掲載されるセールや購入特典をまとめています。内容は変更になる場合があります。</p><b>続きを読む →</b></div></a></section>';
}

const navigationList = document.querySelector('.site-nav__list');
const storyMain = document.querySelector('.story-page .story-main');
if (storyMain && !storyMain.querySelector('.story-experience-bridge')) {
  const bridge = document.createElement('section');
  bridge.className = 'story-experience-bridge';
  bridge.innerHTML = '<img src="../../../images/experience-workshop.png" alt="香りをつくるワークショップの様子"><div><p class="section-label">MAKE YOUR SCENT</p><p>香りを読むだけでなく、つくってみる。</p><a class="shop-text-link" href="../../../experience/">EXPERIENCE →</a></div>';
  storyMain.appendChild(bridge);
}
if (navigationList) {
  const blogLinks = [...navigationList.querySelectorAll('a')].filter((link) => link.textContent.trim() === 'BLOG');
  blogLinks.slice(1).forEach((link) => link.closest('li')?.remove());
  if (blogLinks.length === 0) {
    const blogItem = document.createElement('li');
    const blogPath = location.pathname === '/' || location.pathname.endsWith('/index.html') && !location.pathname.includes('/') ? 'blog/' : '../blog/';
    blogItem.innerHTML = `<a href="${blogPath}">BLOG</a>`;
    const accessLink = [...navigationList.querySelectorAll('a')].find((link) => link.textContent.trim() === 'ACCESS');
    navigationList.insertBefore(blogItem, accessLink?.closest('li') || navigationList.lastElementChild);
  }
  const loginLinks = [...navigationList.querySelectorAll('a')].filter((link) => link.textContent.trim() === 'LOGIN');
  loginLinks.slice(1).forEach((link) => link.closest('li')?.remove());
  if (loginLinks.length === 0) {
  const loginItem = document.createElement('li');
  const loginPath = location.pathname.includes('/experience/') || location.pathname.includes('/shop/') ? '../login/' : 'login/';
  loginItem.innerHTML = `<a href="${loginPath}">LOGIN</a>`;
  navigationList.appendChild(loginItem);
  }
}

if (navigation && menuToggle) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });
  navigationLinks.forEach((link) => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'メニューを開く');
  }));
}

const workshopDescriptions = [
  '12種類から、気になる香りを4種類選びます。',
  '香りの相性を確かめながら、ブレンドします。',
  '自分だけのオードトワレに仕上げます。',
  '完成した香水と、選んだ香料4種を持ち帰ります。'
];
document.querySelectorAll('.workshop-flow li small').forEach((item, index) => {
  if (workshopDescriptions[index]) item.textContent = workshopDescriptions[index];
});
const materials = document.querySelector('.materials-section');
const experienceTitle = document.querySelector('#experience-title');
if (experienceTitle) experienceTitle.innerHTML = '<span>香りをつくる・</span><span>体験する。</span>';
if (materials) {
  const heading = materials.querySelector('h2');
  const lead = materials.querySelector('.experience-section__heading p:last-child');
  if (heading) heading.textContent = '香りに使う素材';
  if (lead) lead.textContent = '植物、果実、花、木、茶など。それぞれ異なる印象を持つ香りを組み合わせます。';
  materials.querySelector('.materials-gallery')?.remove();
}
const infoGrid = document.querySelector('.experience-info-grid');
if (infoGrid && !infoGrid.querySelector('[data-same-day]')) {
  const item = document.createElement('div'); item.dataset.sameDay = 'true';
  item.innerHTML = '<dt>当日参加</dt><dd>空き状況により要確認<br><small>※当日の参加可否は店舗へお問い合わせください。</small></dd>';
  infoGrid.appendChild(item);
}
const scentTypes = document.querySelector('.faq-section');
const workshopSection = document.querySelector('.experience-workshop');
const basicSection = document.querySelector('.basic-information');
if (workshopSection) workshopSection.id = 'workshop';
if (basicSection) basicSection.id = 'basic-information';
if (scentTypes) {
  const faqList = scentTypes.querySelector('.faq-list');
  if (faqList) faqList.innerHTML = '<details><summary>初心者でも参加できますか？</summary><p>はい。初めての方でも参加できます。香りを選びながらスタッフの案内に沿って進める体験です。</p><a class="faq-more" href="#workshop">体験の流れを見る →</a></details><details><summary>どのくらい時間がかかりますか？</summary><p>体験時間は約1時間です。11:00 / 13:00 / 15:00の開催枠があり、開始10分前までに1F受付へお越しください。</p><a class="faq-more" href="#basic-information">予約前の情報を見る →</a></details><details><summary>何を持ち帰れますか？</summary><p>完成したオリジナルのオードトワレ10mlを1本と、選んだ4種類の香料を各10mlずつ持ち帰れます。</p><a class="faq-more" href="#scent-types">香りの種類を見る →</a></details><details><summary>香りは何種類ありますか？</summary><p>通常プランでは、12種類の香料から4種類を選んで組み合わせます。毎月末の土日は、20種類以上から選べる別案内が掲載されています。</p><a class="faq-more" href="#scent-types">香りの種類を見る →</a></details><details><summary>予約変更・キャンセルについて</summary><p>じゃらんnet上のキャンセル締切は体験前日の19:00までです。当日・無連絡キャンセルは体験料金の100％です。</p><a class="faq-more" href="../cancellation/">詳しく見る →</a></details><details><summary>じゃらんへ移動して予約するのですか？</summary><p>はい。体験内容を確認したあと、予約ボタンからじゃらんnetへ移動して予約します。</p><a class="faq-more" href="../reservation-guide/">詳しく見る →</a></details>';
}
if (scentTypes && !document.querySelector('#scent-types')) {
  const scents = [
    ['01','BERGAMOT','ベルガモット','さっぱり　# 大人っぽい','scent-01-bergamot.jpg'],['02','LEMON','レモン','スッキリ　# ナチュラル','scent-02-lemon.jpg'],['03','GRAPEFRUIT','グレープフルーツ','ジューシー　# さわやか','scent-03-grapefruit.jpg'],['04','LAVENDER','ラベンダー','ハーバル　# ナチュラル','scent-04-lavender.jpg'],['05','MUGUET','ミュゲ','さわやか　# 透明感','scent-05-muguet.jpg'],['06','DAMASK ROSE','ダマスクローズ','大人っぽい　# 深い','scent-06-damask-rose.jpg'],['07','ASSAM TEA','アッサムティー','すっきり　# ひと息','scent-07-assam-tea.jpg'],['08','CASSIS','カシス','ジューシー　# 深い','scent-08-cassis.jpg'],['09','MAGNOLIA','マグノリア','やわらかい　# 花','scent-09-magnolia.jpg'],['10','MUSK','ムスク','透明感　# やさしい','scent-10-musk.jpg'],['11','AMBER','アンバー','あたたかい　# 深い','scent-11-amber.jpg'],['12','SANDAL WOOD','サンダルウッド','ウッディ　# 静か','scent-12-sandalwood.jpg'],['L1','SQUASH','スカッシュ','すっきり　# ジューシー','limited-09-squash.jpg'],['L2','SEA BLUE','シーブルー','さわやか　# さっぱり','limited-10-sea-blue.jpg'],['L3','HIBISCUS','ハイビスカス','大人っぽい　# さわやか','limited-11-hibiscus.jpg'],['L4','COCONUT RUM','ココナッツラム','甘い　# クリーミー','limited-12-coconut-rum.jpg']
  ];
  const card = ([number, en, ja, tags, image]) => `<a class="scent-card" href="?scent=${en.toLowerCase().replaceAll(' ','-')}"><img class="scent-card__image" src="../images/experience/scents/${image}" alt="${ja}"><div class="scent-card__body"><span class="scent-card__number">${number}</span><div><strong>${en}</strong><em>${ja}</em><p># ${tags}</p></div><span class="scent-card__arrow">→</span></div></a>`;
  const section = document.createElement('section');
  section.id = 'scent-types'; section.className = 'experience-section scent-types';
  section.innerHTML = `<div class="experience-section__heading"><p class="section-label">SCENT TYPES</p><h2>香りの種類</h2><p class="scent-types__lead">香りの印象を、素材と短い言葉から静かにたどる。今の気分に合う香りを見つけます。</p></div><div class="scent-card-grid">${scents.slice(0,12).map(card).join('')}</div><div class="scent-types__limited"><p class="section-label">LIMITED SCENTS</p><div class="scent-card-grid scent-card-grid--limited">${scents.slice(12).map(card).join('')}</div></div>`;
  scentTypes.parentNode.insertBefore(section, scentTypes);
  section.querySelector('h2').textContent = '香りの種類';
  section.querySelector('.scent-types__lead').innerHTML = '当日は、この中から4種類を選んで組み合わせます。<br><small>※香りの種類は当日の案内により変更になる場合があります。</small>';
  const scentLabels = { BERGAMOT:['ベルガモット','さっぱり　# 大人っぽい'], LEMON:['レモン','スッキリ　# ナチュラル'], GRAPEFRUIT:['グレープフルーツ','ジューシー　# さわやか'], LAVENDER:['ラベンダー','ハーバル　# ナチュラル'], MUGUET:['ミュゲ','さわやか　# 透明感'], 'DAMASK ROSE':['ダマスクローズ','大人っぽい　# 深い'], 'ASSAM TEA':['アッサムティー','すっきり　# ひと息'], CASSIS:['カシス','ジューシー　# 深い'], MAGNOLIA:['マグノリア','やわらかい　# 花'], MUSK:['ムスク','透明感　# やさしい'], AMBER:['アンバー','あたたかい　# 深い'], 'SANDAL WOOD':['サンダルウッド','ウッディ　# 静か'], SQUASH:['スカッシュ','すっきり　# ジューシー'], 'SEA BLUE':['シーブルー','さわやか　# さっぱり'], HIBISCUS:['ハイビスカス','大人っぽい　# さわやか'], 'COCONUT RUM':['ココナッツラム','甘い　# クリーミー'] };
  section.querySelectorAll('.scent-card').forEach((card) => { const en = card.querySelector('strong')?.textContent.trim(); if (scentLabels[en]) { card.querySelector('em').textContent = scentLabels[en][0]; card.querySelector('p').textContent = '# ' + scentLabels[en][1]; } });
}

const page = document.body.dataset.page;
const latestMember = JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]').slice(-1)[0];
document.querySelector('#registered-member-id')?.replaceChildren(document.createTextNode(latestMember?.id || '—'));
if (page === 'mypage-profile') {
  const member = JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]').slice(-1)[0] || {};
  const fields = { id: '会員ID', name: '氏名', kana: 'フリガナ', email: 'メールアドレス', phone: '電話番号', postal: '郵便番号', address: '住所', purpose: '香りに求めること' };
  const profile = document.querySelector('#member-profile');
  if (profile) profile.innerHTML = Object.entries(fields).map(([key, label]) => `<div class="profile-row"><dt>${label}</dt><dd>${String(member[key] || '—').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))}</dd></div>`).join('');
}
if (page === 'admin-members') {
  document.querySelector('.admin-note')?.insertAdjacentText('afterbegin', '保存先はブラウザ内localStorageです。CSVでLibreOffice Calcへ書き出せます。');
  const sample = [{ id: '001', name: '山田 花子（サンプル）', kana: 'ヤマダ ハナコ', email: 'demo@example.com', purpose: '落ち着きたい', registeredAt: '2026/09/29', demo: true }];
  const members = [...sample, ...JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]')];
  const body = document.querySelector('#member-table-body');
  const keys = ['id','name','kana','email','phone','postal','address','purpose','registeredAt'];
  if (body) body.innerHTML = members.map((member) => `<tr>${keys.map((key) => `<td>${String(member[key] || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))}</td>`).join('')}</tr>`).join('');
  document.querySelector('#member-csv')?.addEventListener('click', () => {
    const rows = [['会員ID','氏名','フリガナ','メールアドレス','電話番号','郵便番号','住所','香りに求めること','登録日'], ...members.map((member) => keys.map((key) => member[key] || ''))];
    const csv = '\ufeff' + rows.map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); link.download = 'inimu_members.csv'; link.click(); URL.revokeObjectURL(link.href);
  });
}
const form = document.querySelector('[data-form]');
const showError = (form, message) => { const error = form.querySelector('.form-error'); if (error) error.textContent = message; };
if (form && page === 'login') {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email) return showError(form, 'メールアドレスを入力してください');
    if (!password) return showError(form, 'パスワードを入力してください');
    location.href = '../mypage/';
  });
}
/* Legacy register handlers removed; one active handler follows. */
/* if (false && form && page === 'register') {
  const preference = document.createElement('fieldset');
  preference.className = 'register-preference';
  preference.innerHTML = '<legend>あなたが香りを選ぶとき、<br>いちばん大切にしたいことは？</legend><p>あなたに合う香りや体験をご案内するためのヒントとして、よければ教えてください。</p><div class="preference-options"><label class="purpose-option"><span class="purpose-option__text">落ち着きたい</span><input type="radio" name="purpose" value="calm"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">気分を切り替えたい</span><input type="radio" name="purpose" value="refresh"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">自分らしさを感じたい</span><input type="radio" name="purpose" value="identity"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">記憶に残る香りがほしい</span><input type="radio" name="purpose" value="memory"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">贈りものにしたい</span><input type="radio" name="purpose" value="gift"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">まだわからない</span><input type="radio" name="purpose" value="explore"><span class="purpose-option__radio" aria-hidden="true"></span></label></div>';
  form.querySelector('.check-label').before(preference);
  form.addEventListener('disabled-register-submit', (event) => {
    event.preventDefault();
    const required = ['name','kana','email','password','passwordConfirm','postal','address','phone'];
    const missing = required.find((name) => !form.elements[name].value.trim());
    if (missing) return showError(form, '未入力の項目があります');
    if (form.elements.password.value !== form.elements.passwordConfirm.value) return showError(form, 'パスワードが一致しません');
    if (!form.elements.terms.checked) return showError(form, '利用規約・プライバシーポリシーに同意してください');
    const purpose = form.querySelector('input[name="purpose"]:checked');
    if (!purpose) return showError(form, '香りを選ぶときに大切にしたいことを選択してください');
    if (false) return showError(form, '登録先が未設定です。管理者にお問い合わせください。');
    const payload = { memberId: `INIMU-${String(Date.now()).slice(-4).padStart(4, '0')}`, name: form.elements.name.value.trim(), kana: form.elements.kana.value.trim(), email: form.elements.email.value.trim(), scentPreference: purpose.closest('label')?.querySelector('.purpose-option__text')?.textContent.trim() || '', createdAt: new Date().toISOString() };
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;
    try {
      const response = null;
      const result = await response.json();
      if (result.status !== 'success') throw new Error(result.message || 'Registration failed');
      void 0;
    } catch (error) {
      showError(form, '登録に失敗しました。もう一度お試しください。');
      if (submitButton) submitButton.disabled = false;
    }
  });
}
if (false && form && page === 'register') {
  const preference = document.createElement('fieldset');
  preference.className = 'register-preference';
  preference.innerHTML = '<legend>あなたが香りを選ぶとき、<br>いちばん大切にしたいことは？</legend><div class="preference-options"><label class="purpose-option"><span class="purpose-option__text">落ち着きたい</span><input type="radio" name="purpose" value="calm"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">気分を切り替えたい</span><input type="radio" name="purpose" value="refresh"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">自分らしさを感じたい</span><input type="radio" name="purpose" value="identity"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">記憶に残る香りがほしい</span><input type="radio" name="purpose" value="memory"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">贈りものにしたい</span><input type="radio" name="purpose" value="gift"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">まだわからない</span><input type="radio" name="purpose" value="explore"><span class="purpose-option__radio" aria-hidden="true"></span></label></div>';
  form.querySelector('.check-label').before(preference);
  form.addEventListener('disabled-register-submit', (event) => {
    event.preventDefault();
    const required = ['name', 'kana', 'email', 'password', 'passwordConfirm', 'postal', 'address', 'phone'];
    if (required.some((name) => !form.elements[name].value.trim())) return showError(form, '未入力の項目があります');
    if (form.elements.password.value !== form.elements.passwordConfirm.value) return showError(form, 'パスワードが一致しません');
    if (!form.elements.terms.checked) return showError(form, '利用規約・プライバシーポリシーに同意してください');
    const purpose = form.querySelector('input[name="purpose"]:checked');
    if (!purpose) return showError(form, '香りを選ぶときに大切にしたいことを選択してください');
    const members = JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]');
    const member = { id: `INIMU-${String(members.length + 1).padStart(4, '0')}`, name: form.elements.name.value.trim(), kana: form.elements.kana.value.trim(), email: form.elements.email.value.trim(), purpose: purpose.closest('label')?.querySelector('.purpose-option__text')?.textContent.trim() || '', registeredAt: new Date().toISOString(), demo: true };
    members.push(member);
    localStorage.setItem('inimuDemoMembers', JSON.stringify(members));
    void 0;
  });
}
if (false && form && page === 'register') {
  form.addEventListener('disabled-register-submit', (event) => {
    event.preventDefault();
    const required = ['name', 'kana', 'email', 'password', 'passwordConfirm', 'postal', 'address', 'phone'];
    if (required.some((name) => !form.elements[name].value.trim())) return showError(form, '未入力の項目があります');
    if (form.elements.password.value !== form.elements.passwordConfirm.value) return showError(form, 'パスワードが一致しません');
    if (!form.elements.terms.checked) return showError(form, '利用規約・プライバシーポリシーに同意してください');
    const purpose = form.querySelector('input[name="purpose"]:checked');
    if (!purpose) return showError(form, '香りを選ぶときに大切にしたいことを選択してください');
    const members = JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]');
    members.push({ id: `INIMU-${String(members.length + 1).padStart(4, '0')}`, name: form.elements.name.value.trim(), kana: form.elements.kana.value.trim(), email: form.elements.email.value.trim(), phone: form.elements.phone.value.trim(), postal: form.elements.postal.value.trim(), address: form.elements.address.value.trim(), purpose: purpose.value, registeredAt: new Date().toISOString(), demo: true });
    localStorage.setItem('inimuDemoMembers', JSON.stringify(members));
    void 0;
  });
}
*/
if (form && page === 'register') {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const required = ['name', 'kana', 'email', 'password', 'passwordConfirm', 'postal', 'address', 'phone'];
    if (required.some((name) => !form.elements[name].value.trim())) return showError(form, '未入力の項目があります');
    if (form.elements.password.value !== form.elements.passwordConfirm.value) return showError(form, 'パスワードが一致しません');
    if (!form.elements.terms.checked) return showError(form, '利用規約・プライバシーポリシーに同意してください');
    const purpose = form.querySelector('input[name="purpose"]:checked');
    if (!purpose) return showError(form, '香りを選ぶときに大切にしたいことを選択してください');
    const members = JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]');
    members.push({ id: `INIMU-${String(members.length + 1).padStart(4, '0')}`, name: form.elements.name.value.trim(), kana: form.elements.kana.value.trim(), email: form.elements.email.value.trim(), phone: form.elements.phone.value.trim(), postal: form.elements.postal.value.trim(), address: form.elements.address.value.trim(), purpose: purpose.value, registeredAt: new Date().toISOString(), demo: true });
    localStorage.setItem('inimuDemoMembers', JSON.stringify(members));
    window.location.href = '/register/complete.html';
  });
}
if (form && page === 'forgot') {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.elements.email.value.trim()) return showError(form, 'メールアドレスを入力してください');
    form.innerHTML = '<p class="success-message">再設定用メールを送信しました（デモ）</p><a class="text-link" href="../login/">ログインへ戻る →</a>';
  });
}

/* Quiet JP / EN wayfinding for the primary pages. */
(() => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') === 'en' ? 'en' : 'ja';
  const switcher = document.querySelector('.language-switch');
  if (!switcher) return;
  switcher.querySelectorAll('[data-lang]').forEach((link) => {
    link.setAttribute('aria-current', link.dataset.lang === lang ? 'true' : 'false');
  });
  if (lang !== 'en') return;
  const body = document.body;
  const replacements = body.classList.contains('experience-page') ? [
    ['.experience-hero h1', 'Make your scent.\nExperience it.'],
    ['.experience-hero__copy > p:not(.section-label)', 'Touch Japanese land and materials in Asakusa.\nChoose, blend, and make your own scent.'],
    ['#basic-information-title', 'Before you reserve'],
    ['#faq-title', 'FAQ before booking'],
    ['#access-title', 'inimu Asakusa'],
    ['#reservation-title', 'Check the experience and reserve.'],
    ['.reservation-source', 'Reservations are handled by Jalan.net ? (online card payment)']
  ] : body.classList.contains('shop-page') ? [
    ['#shop-title', 'Choose your scent.'],
    ['#scent-title', 'Choose by scent'],
    ['#item-title', 'Choose by item'],
    ['#brand-title', 'Choose by brand'],
    ['#make-scent-title', 'Not only choose. Make.']
  ] : body.classList.contains('story-page') ? [
    ['.story-page .site-nav a:nth-child(1)', 'SHOP'],
    ['.story-page .site-nav a:nth-child(2)', 'EXPERIENCE'],
    ['.story-page .story-link--secondary', 'Experience this scent ?']
  ] : [
    ['.wayfinding__title-ja', 'Choose Japanese scents. Make your own.'],
    ['.way-card--shop .way-card__description', 'Browse and buy scents'],
    ['.way-card--experience .way-card__description', 'Make and experience your own scent']
  ];
  replacements.forEach(([selector, text]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = text;
  });
})();

/* Complete primary-page language layer with persistent selection. */
(() => {
  const switcher = document.querySelector('.language-switch');
  if (!switcher) return;
  const queryLang = new URLSearchParams(location.search).get('lang');
  const lang = queryLang === 'en' || queryLang === 'ja' ? queryLang : (localStorage.getItem('inimuLang') || 'ja');
  localStorage.setItem('inimuLang', lang);
  switcher.querySelectorAll('[data-lang]').forEach((link) => {
    link.setAttribute('aria-current', link.dataset.lang === lang ? 'true' : 'false');
    link.addEventListener('click', () => localStorage.setItem('inimuLang', link.dataset.lang));
  });
  if (lang !== 'en') return;
  const maps = {
    home: {
      '���{�̍�����A�I�ԁB����B':'Choose Japanese scents. Make your own.', 'FRAGRANCE STORE / PERFUME WORKSHOP':'FRAGRANCE STORE / PERFUME WORKSHOP', '����̏��i��T���E����':'Browse and buy scents', '���������E�̌�����':'Make and experience your own scent'
    },
    shop: {
      '����̏��i��T���E����':'Choose a scent.','���肩��I��':'Choose by scent','�A�C�e������T��':'Choose by item','�u�����h����T��':'Choose by brand','���i�ꗗ':'All items','�V�����i':'New items','�I�Ԃ����łȂ��A����B':'Not only choose. Make.','12��ނ���4��ނ�I�сA':'Choose four from twelve scents,','���������̍���ցB':'and make your own scent.','EXPERIENCE ��':'EXPERIENCE ��','HATENKO�̐��E������ ?':'See the world of HATENKO ?','������L���Ɏc������':'A fragrance to remember'
    },
    experience: {
      '���������E':'Make your scent.','�̌�����B':'Experience it.','�󑐂ŁA���{�̓y�n�Ƒf�ނ��琶�܂ꂽ����ɐG���B':'Touch scents born from Japanese land and materials in Asakusa.','�����I�сA�g�ݍ��킹�A���������̍��������鎞�ԁB':'Choose and blend scents to make your own perfume.','�\��O�Ɋm�F���� ��':'Before you reserve ��','�����I�ԂƂ��납��A�̌��B':'The experience begins with choosing a scent.','���S�҂ł��X�^�b�t�̈ē��𕷂��Ȃ���A�����Ȃ��y���߂܂��B':'Beginners are welcome; staff guide you through the experience.','�\��O�ɒm���Ă�����������':'Before you reserve','����':'Price','���ЂƂ�l 5,500�~':'JPY 5,500 per person','���v����':'Duration','��1����':'About 1 hour','�J�Ó���':'�J�Ó���','����':'Scents','12��ނ���4��ނ�I��':'Choose 4 from 12 scents','�����A��':'Take home','�I�[�h�g����10ml 1��':'One 10ml eau de toilette','�I�񂾍���4��i�e10ml�j':'Four selected scent materials (10ml each)','��t':'Check-in','�J�n10���O�܂ł�1F��t��':'Check in at the 1F reception 10 minutes before','�x�����@':'Payment','������net�I�����C���J�[�h����':'Jalan.net online card payment','�Q��':'Participation','���S�Ҋ��}�E��l�Q���͗\��y�[�W�Ŋm�F':'Beginners welcome; solo participation: confirm when booking','������':'What to bring','�\��y�[�W�Ŋm�F':'Please confirm when booking','�q�ǂ�':'Children','�Q�������͗\��y�[�W�Ŋm�F':'Please confirm eligibility when booking','�p��Ή�':'Language support','�Ή��󋵂͗\��y�[�W�Ŋm�F':'Language support: Please confirm when booking','�\��O�̂悭���鎿��':'FAQ before booking','�̌����e���m�F���ė\�񂷂�B':'Review the experience and reserve.','�\��͂�����net�Ŏ󂯕t���Ă��܂� ?�i�I�����C���J�[�h���ρj':'Reservations are handled by Jalan.net ? (online card payment)','������net�ŗ\�� ?':'Reserve on Jalan.net ?','Google Maps�Ō��� ?':'View on Google Maps ?','inimu�󑐓X':'inimu Asakusa'
    },
    story: {
      '����ŁA�c���B':'Leave a memory through scent.','���{�̓y�n�ƐA��':'Japanese land and plants','�y�n�̗���':'A flow of places','���i�ꗗ':'Products','���̍���̏��i������ ?':'See products in this scent ?','���̍����̌����� ?':'Experience this scent ?','�j�V�r�Ƃ�':'What HATENKO means','�����G�ƍ���':'Ukiyo-e and scent','8��ނ̍���':'Eight scents','HATENKO�̐��E������ ?':'See the world of HATENKO ?','���{�e�n�̔_�Y����A�����������A�����ʂ��Ēn��̏z������WANOWA�B�����T�C�g�ł́A�y�n�Ƒf�ނ̑g�ݍ��킹���Љ�Ă��܂��B':'WANOWA uses produce and plants from across Japan to create local circulation through scent. Its stories connect each place with its materials.'
    }
  };
  const key = document.body.classList.contains('shop-page') ? 'shop' : document.body.classList.contains('experience-page') ? 'experience' : document.body.classList.contains('story-page') ? 'story' : 'home';
  const map = maps[key];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; let node;
  while (node = walker.nextNode()) nodes.push(node);
  nodes.forEach((textNode) => { const value = textNode.nodeValue.trim(); if (map[value]) textNode.nodeValue = textNode.nodeValue.replace(value, map[value]); });
})();

/* Fill the remaining high-intent EXPERIENCE content in English. */
(() => {
  if (localStorage.getItem('inimuLang') !== 'en' || !document.body.classList.contains('experience-page')) return;
  const workshop = document.querySelector('.workshop-flow');
  if (workshop) workshop.innerHTML = '<li><span>01</span><strong>Choose scents</strong><small>Choose four scents from twelve materials.</small></li><li><span>02</span><strong>Blend</strong><small>Combine the selected scents.</small></li><li><span>03</span><strong>Make your scent</strong><small>Finish your original eau de toilette.</small></li><li><span>04</span><strong>Take it home</strong><small>Take home your perfume and four scent materials.</small></li>';
  const faq = document.querySelector('.faq-list');
  if (faq) faq.innerHTML = '<details><summary>Can beginners join?</summary><p>Yes. Staff guide you through choosing scents and the workshop.</p></details><details><summary>How long does it take?</summary><p>About one hour. Please check in 10 minutes before the start.</p></details><details><summary>What can I take home?</summary><p>One 10ml eau de toilette and four selected scent materials.</p></details><details><summary>How do I reserve?</summary><p>Check availability and reserve through the Jalan.net booking page.</p></details><details><summary>Language support</summary><p>Language support: Please confirm when booking.</p></details>';
  const access = document.querySelector('.access-layout__copy');
  if (access) { const ps = access.querySelectorAll('p'); if (ps[0]) ps[0].innerHTML = '2-1-5 Asakusa, Taito-ku, Tokyo 111-0032'; if (ps[1]) ps[1].innerHTML = 'Tokyo Metro Ginza Line Asakusa Station: 2 min walk from Exit 6<br>Toei Asakusa Line: 5 min walk from Exit A5<br>Tobu Skytree Line: 2 min walk from North Gate'; if (ps[2]) ps[2].innerHTML = 'Hours 10:30?18:00<br>Closed Mondays (or the following Tuesday when Monday is a holiday)'; }
})();
