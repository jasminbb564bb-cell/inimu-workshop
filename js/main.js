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
    shopMain.querySelector('.shop-all')
  ].filter(Boolean);
  orderedSections.forEach((section) => shopMain.appendChild(section));
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
document.querySelectorAll('.site-footer').forEach((footer) => {
  footer.innerHTML = `<div class="site-footer__inner"><div class="site-footer__brand"><a class="site-footer__logo" href="${siteRoot}"><img src="${siteRoot}images/change1.png" alt="inimu"></a><p>香りを買う。<br>香りをつくる。</p></div><nav class="site-footer__group" aria-label="メインナビゲーション"><p class="site-footer__label">EXPLORE</p><ul class="site-footer__nav"><li><a href="${new URL('shop/', siteRoot)}">SHOP</a></li><li><a href="${new URL('experience/', siteRoot)}">EXPERIENCE</a></li><li><a href="${new URL('blog/', siteRoot)}">BLOG</a></li><li><a href="${new URL('experience/#access', siteRoot)}">ACCESS</a></li></ul></nav><nav class="site-footer__group" aria-label="サポートナビゲーション"><p class="site-footer__label">INFORMATION</p><ul class="site-footer__nav"><li><a href="${new URL('login/', siteRoot)}">LOGIN</a></li><li><a href="${new URL('experience/#faq', siteRoot)}">FAQ</a></li><li><a href="${new URL('shopping-guide/', siteRoot)}">SHOPPING GUIDE</a></li><li><a href="${new URL('legal/', siteRoot)}">PRIVACY</a></li><li><a href="${new URL('legal/', siteRoot)}">TERMS</a></li></ul></nav><p class="site-footer__copyright">© inimu</p></div>`;
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
if (page === 'admin-members') {
  const sample = [{ id: '001', name: '山田 花子（サンプル）', kana: 'ヤマダ ハナコ', email: 'demo@example.com', purpose: '落ち着きたい', registeredAt: '2026/09/29', demo: true }];
  const members = [...sample, ...JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]')];
  const body = document.querySelector('#member-table-body');
  const keys = ['id','name','kana','email','purpose','registeredAt'];
  if (body) body.innerHTML = members.map((member) => `<tr>${keys.map((key) => `<td>${String(member[key] || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))}</td>`).join('')}</tr>`).join('');
  document.querySelector('#member-csv')?.addEventListener('click', () => {
    const rows = [['会員ID','氏名','フリガナ','メールアドレス','香りに求めること','登録日'], ...members.map((member) => keys.map((key) => member[key] || ''))];
    const csv = '\ufeff' + rows.map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); link.download = 'inimu-member-data-demo.csv'; link.click(); URL.revokeObjectURL(link.href);
  });
}
const form = document.querySelector('[data-form]');
const showError = (form, message) => { const error = form.querySelector('.form-error'); if (error) error.textContent = message; };
if (form && page === 'login') {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (!email) return showError(form, 'メールアドレスを入力してください');
    if (!password) return showError(form, 'パスワードを入力してください');
    location.href = '../mypage/';
  });
}
if (form && page === 'register') {
  const preference = document.createElement('fieldset');
  preference.className = 'register-preference';
  preference.innerHTML = '<legend>あなたが香りを選ぶとき、<br>いちばん大切にしたいことは？</legend><p>あなたに合う香りや体験をご案内するためのヒントとして、よければ教えてください。</p><div class="preference-options"><label class="purpose-option"><span class="purpose-option__text">落ち着きたい</span><input type="radio" name="purpose" value="calm"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">気分を切り替えたい</span><input type="radio" name="purpose" value="refresh"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">自分らしさを感じたい</span><input type="radio" name="purpose" value="identity"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">記憶に残る香りがほしい</span><input type="radio" name="purpose" value="memory"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">贈りものにしたい</span><input type="radio" name="purpose" value="gift"><span class="purpose-option__radio" aria-hidden="true"></span></label><label class="purpose-option"><span class="purpose-option__text">まだわからない</span><input type="radio" name="purpose" value="explore"><span class="purpose-option__radio" aria-hidden="true"></span></label></div>';
  form.querySelector('.check-label').before(preference);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const required = ['name','kana','email','password','passwordConfirm','postal','address','phone'];
    const missing = required.find((name) => !form.elements[name].value.trim());
    if (missing) return showError(form, '未入力の項目があります');
    if (form.elements.password.value !== form.elements.passwordConfirm.value) return showError(form, 'パスワードが一致しません');
    if (!form.elements.terms.checked) return showError(form, '利用規約・プライバシーポリシーに同意してください');
    const demoMembers = JSON.parse(localStorage.getItem('inimuDemoMembers') || '[]');
    const purpose = form.querySelector('input[name="purpose"]:checked');
    demoMembers.push({ id: String(demoMembers.length + 1).padStart(3, '0'), name: form.elements.name.value.trim(), kana: form.elements.kana.value.trim(), email: form.elements.email.value.trim(), purpose: purpose?.closest('label')?.querySelector('.purpose-option__text')?.textContent.trim() || '未回答', registeredAt: new Date().toLocaleDateString('ja-JP'), demo: true });
    localStorage.setItem('inimuDemoMembers', JSON.stringify(demoMembers));
    location.href = '../register/confirm.html';
  });
}
if (form && page === 'forgot') {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.elements.email.value.trim()) return showError(form, 'メールアドレスを入力してください');
    form.innerHTML = '<p class="success-message">再設定用メールを送信しました（デモ）</p><a class="text-link" href="../login/">ログインへ戻る →</a>';
  });
}
