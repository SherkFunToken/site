// Banner rotation script
let bannerIndex = 0;
const banners = [
    { src: "https://token4fun.github.io/babysherk/banner1.gif", link: "https://sherkfun.io/" },
    { src: "https://token4fun.github.io/babysherk/banner3.gif", link: "https://t.me/SherkGameBot" },
    { src: "https://token4fun.github.io/babysherk/banner5.gif", link: "https://t.me/SherkFunCommunity" },
    { src: "https://token4fun.github.io/babysherk/banner6.gif", link: "https://t.me/SherkFunCommunity/1529" },
    { src: "https://sherkfuntoken.github.io/site/banner7.gif", link: "https://t.me/SherkFunCommunity/1529" },
];

function rotateBanner() {
    const bannerElement = document.getElementById('banner');
    const bannerLink = document.getElementById('banner-link');
    
    if (!bannerElement || !bannerLink) return; // Verifica se os elementos existem
    
    bannerElement.style.opacity = '0';

    setTimeout(() => {
        bannerIndex = (bannerIndex + 1) % banners.length;
        bannerElement.src = banners[bannerIndex].src;
        bannerLink.href = banners[bannerIndex].link;
        bannerElement.style.opacity = '1';
    }, 500); // Tempo para transição de opacidade
}

function prevBanner() {
    const bannerElement = document.getElementById('banner');
    const bannerLink = document.getElementById('banner-link');
    
    if (!bannerElement || !bannerLink) return;

    bannerIndex = (bannerIndex - 1 + banners.length) % banners.length; // Voltar ao índice anterior
    bannerElement.src = banners[bannerIndex].src;
    bannerLink.href = banners[bannerIndex].link;
}

function nextBanner() {
    const bannerElement = document.getElementById('banner');
    const bannerLink = document.getElementById('banner-link');
    
    if (!bannerElement || !bannerLink) return;

    bannerIndex = (bannerIndex + 1) % banners.length; // Avançar ao próximo índice
    bannerElement.src = banners[bannerIndex].src;
    bannerLink.href = banners[bannerIndex].link;
}

window.onload = function () {
    // Inicializando a rotação do banner a cada 7 segundos
    setInterval(rotateBanner, 7000); // Rotacionar o banner a cada 7 segundos
    // Adicionando as funções de navegação
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    if (prevButton) prevButton.addEventListener('click', prevBanner);
    if (nextButton) nextButton.addEventListener('click', nextBanner);

    // Funções para conteúdos randomizados
    getRandomFirstSection();
    getRandomSecondSection();
    getRandomGiveaway();
};

// Função para a primeira seção de conteúdo (para "Introducing $SFT")
function getRandomFirstSection() {
    const versions = [
        {
            title: 'Introducing the Community Favorite: Sherk Fun Token ($SFT)',
            content: `
                <p>What started as a test token on the Solana network by the SherkFun.io team has blossomed into a highly cherished project, driven by the community. Today, $SFT stands as the flagship token of SherkFun.io, offering unique features that other tokens can only aspire to achieve!</p>
                <p>With cutting-edge tools like the SherkFunBuyBot already operating flawlessly, $SFT is set to transform our interaction with blockchain technology. But that’s not all—get ready for the upcoming SherkSnipe&Buy Bot, crafted to enhance token purchases with unmatched speed, intelligence, and efficiency.</p>
                <p>As the pioneering token on SherkFun.io, $SFT is charting a new course for future projects, redefining tokenomics, and revolutionizing token launches on the Solana network. Join us today and become part of this incredible movement!</p>
            `
        },
        {
            title: 'Discover the Sherk Fun Token ($SFT) Revolution',
            content: `
                <p>The journey of the SherkFun.io team began with a test token on the Solana network, which quickly turned into a community favorite. Today, $SFT proudly serves as the flagship token of SherkFun.io, offering innovative features that other tokens can only dream of.</p>
                <p>With advanced tools such as the SherkFunBuyBot already up and running smoothly, $SFT is poised to reshape how we engage with blockchain technology. And the excitement doesn’t stop there—prepare for the launch of the SherkSnipe&Buy Bot, designed to streamline token purchases with greater speed and precision than ever before.</p>
                <p>As the trailblazing token on SherkFun.io, $SFT is leading the charge for future projects, reimagining tokenomics, and revolutionizing how token launches take place on Solana. Be a part of this movement and join the revolution today!</p>
            `
        },
        {
            title: 'Get to Know the Sherk Fun Token ($SFT)',
            content: `
                <p>$SFT started as a simple test token on the Solana network by the SherkFun.io team, and quickly evolved into a beloved project supported by the community. Now, $SFT proudly stands as the flagship token of SherkFun.io, offering features that outshine other tokens!</p>
                <p>With advanced tools like the SherkFunBuyBot already running perfectly, $SFT is redefining the way we interact with blockchain technology. And the excitement continues with the launch of the SherkSnipe&Buy Bot, designed to make token purchases faster, smarter, and more efficient than ever before.</p>
                <p>As the first token on SherkFun.io, $SFT is setting the stage for future projects, transforming tokenomics, and revolutionizing the way token launches are conducted on Solana. Don’t miss out—join the revolution now and be part of this incredible journey!</p>
            `
        }
    ];

    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    document.getElementById('highlight-title-first').innerHTML = randomVersion.title;
    document.getElementById('dynamic-content-first').innerHTML = randomVersion.content;
}

// Função para a segunda seção de conteúdo (para "Ready to Join the $SFT Movement?")
function getRandomSecondSection() {
    const versions = [
        {
            title: 'Ready to Join the $SFT Revolution? 🚀',
            content: `
                <p>Step into the future with $SFT, the token that’s taking the Solana blockchain by storm! Powered by Sherk.fun, $SFT is not just another token—it's a game-changer for community-driven projects. With tools like the SherkFunBuyBot already active and the upcoming SherkSnipe&Buy Bot on the horizon, $SFT is redefining the way we interact with the crypto space.</p>
                <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlight">Buy $SFT Now</a>
                <a href="https://t.me/SherkFunCommunity" class="button">Hop Into Telegram</a>
                <a href="https://twitter.com/intent/tweet?text=Join+the+revolution+with+$SFT!%0AThe+ultimate+community-driven+token+on+%23Solana.%0APowered+by+Sherkfun.io!%0A%F0%9F%91%89+Telegram:+https://t.me/SherkFunCommunity%0A%23Crypto+%23Solana+%23Blockchain+%23DeFi+$SFT" class="button" target="_blank">Share the Hype on Twitter</a>
                <p>Get ahead of the game, unlock exclusive benefits, and become a key player in the $SFT movement. The time to shine is now—don't miss out!</p>
            `
        },
        {
            title: 'Join the $SFT Community Today! 🌐',
            content: `
                <p>The future of crypto is here, and it’s called $SFT. Powered by Sherk.fun, this community-driven token on the Solana blockchain is revolutionizing how we engage with blockchain technology. With features like the SherkFunBuyBot already in action and the highly anticipated SherkSnipe&Buy Bot just around the corner, $SFT is setting the standard for smarter, faster token buying.</p>
                <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlight">Buy $SFT Now</a>
                <a href="https://t.me/SherkFunCommunity" class="button">Hop Into Telegram</a>
                <a href="https://twitter.com/intent/tweet?text=Join+the+revolution+with+$SFT!%0AThe+ultimate+community-driven+token+on+%23Solana.%0APowered+by+Sherkfun.io!%0A%F0%9F%91%89+Telegram:+https://t.me/SherkFunCommunity%0A%23Crypto+%23Solana+%23Blockchain+%23DeFi+$SFT" class="button" target="_blank">Share the Hype on Twitter</a>
                <p>Be part of the most exciting crypto revolution and unlock incredible rewards. $SFT is here, and your journey starts now!</p>
            `
        },
        {
            title: 'Get Ready to Experience $SFT! 🌟',
            content: `
                <p>Don’t just sit back—be part of the $SFT movement! As the token that’s shaking up the Solana blockchain, $SFT is bringing a fresh perspective to community-driven projects. With tools like the SherkFunBuyBot already making waves and the upcoming SherkSnipe&Buy Bot promising to enhance your token purchases, $SFT is designed to offer a faster and smarter experience.</p>
                <a href="https://sherkfun.io/token/6wY93bkRSk5KagCGTHrjLPCpbMWEPQGU9wrpsZ8tyftL" class="button-highlight">Buy $SFT Now</a>
                <a href="https://t.me/SherkFunCommunity" class="button">Hop Into Telegram</a>
                <a href="https://twitter.com/intent/tweet?text=Join+the+revolution+with+$SFT!%0AThe+ultimate+community-driven+token+on+%23Solana.%0APowered+by+Sherkfun.io!%0A%F0%9F%91%89+Telegram:+https://t.me/SherkFunCommunity%0A%23Crypto+%23Solana+%23Blockchain+%23DeFi+$SFT" class="button" target="_blank">Share the Hype on Twitter</a>
                <p>Join the revolution early and take advantage of exclusive rewards. With $SFT, the future of crypto is now!</p>
            `
        }
    ];

    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    document.getElementById('highlight-title-second').innerHTML = randomVersion.title;
    document.getElementById('dynamic-content-second').innerHTML = randomVersion.content;
}

// Função para a terceira seção de conteúdo (para "Giveaway Announcement")
function getRandomGiveaway() {
    const versions = [
        {
            title: 'Giveaway Announcement',
            content: `
                <p>After we bond $SFT to Raydium, I will sponsor an exclusive Giveaway!<br>
                0.5% (5M) of the supply will be given to a new holder!<br>
                To qualify, every purchase over $50 (after bonding to Raydium) will count.<br>
                Make sure to hold your tokens for at least 48 hours to be eligible for the giveaway.</p>
            `
        },
        {
            title: 'Giveaway Announcement',
            content: `
                <p>Get ready for an exciting Giveaway once $SFT is bonded to Raydium!<br>
                0.5% (5M) of the total supply is up for grabs!<br>
                All purchases over $50, after bonding to Raydium, will be eligible to participate.<br>
                Remember to hold your tokens for 48 hours after the giveaway to qualify as a winner.</p>
            `
        },
        {
            title: 'Giveaway Announcement',
            content: `
                <p>The exclusive $SFT Giveaway will kick off once the token is bonded to Raydium!<br>
                0.5% (5M) of the supply is going to find a new holder!<br>
                To qualify, every purchase over $50 (after bonding to Raydium) will count.<br>
                Winners must hold their tokens for a minimum of 48 hours after the giveaway.</p>
            `
        }
    ];

    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    document.getElementById('giveaway-title').innerHTML = randomVersion.title;
    document.getElementById('giveaway-content').innerHTML = randomVersion.content;
}
