// Banner rotation script
let bannerIndex = 0;
const banners = [
    { src: "https://token4fun.github.io/babysherk/banner1.gif", link: "https://sherkfun.io/" },
    { src: "https://token4fun.github.io/babysherk/banner3.gif", link: "https://t.me/SherkGameBot" },
    { src: "https://token4fun.github.io/babysherk/banner5.gif", link: "https://t.me/SherkFunCommunity" },
    { src: "https://token4fun.github.io/babysherk/banner6.gif", link: "https://t.me/SherkFunCommunity/1529" },
];

function rotateBanner() {
    const bannerElement = document.getElementById('banner');
    const bannerLink = document.getElementById('banner-link');
    bannerElement.style.opacity = '0';

    setTimeout(() => {
        bannerIndex = (bannerIndex + 1) % banners.length;
        bannerElement.src = banners[bannerIndex].src;
        bannerLink.href = banners[bannerIndex].link;
        bannerElement.style.opacity = '1';
    }, 500);
}

window.onload = function () {
    setInterval(rotateBanner, 7000);
};

// Função otimizada de randomização
function getRandomSection(id, versions) {
    const randomVersion = versions[Math.floor(Math.random() * versions.length)];
    document.getElementById(id).innerHTML = randomVersion.content;
}

// Função para carregar todas as seções após o carregamento da página
window.addEventListener('load', function() {
    // Dados para cada seção
    const firstSection = [
        {
            title: 'Introducing the Community Favorite: Sherk Fun Token ($SFT)',
            content: `
                <p>What started as a test token on the Solana network by the SherkFun.io team...</p>
            `
        },
        {
            title: 'Discover the Sherk Fun Token ($SFT) Revolution',
            content: `
                <p>The journey of the SherkFun.io team began with a test token on the Solana network...</p>
            `
        },
        {
            title: 'Get to Know the Sherk Fun Token ($SFT)',
            content: `
                <p>$SFT started as a simple test token on the Solana network by the SherkFun.io team...</p>
            `
        }
    ];

    const secondSection = [
        {
            title: 'Ready to Join the $SFT Revolution? 🚀',
            content: `
                <p>Step into the future with $SFT, the token that’s taking the Solana blockchain by storm...</p>
            `
        },
        {
            title: 'Join the $SFT Community Today! 🌐',
            content: `
                <p>The future of crypto is here, and it’s called $SFT. Powered by Sherk.fun...</p>
            `
        },
        {
            title: 'Get Ready to Experience $SFT! 🌟',
            content: `
                <p>Don’t just sit back—be part of the $SFT movement! As the token that’s shaking up the Solana blockchain...</p>
            `
        }
    ];

    const giveawaySection = [
        {
            title: 'Giveaway Announcement',
            content: `
                <p>After we bond $SFT to Raydium, I will sponsor an exclusive Giveaway!<br>...</p>
            `
        },
        {
            title: 'Giveaway Announcement',
            content: `
                <p>Get ready for an exciting Giveaway once $SFT is bonded to Raydium!<br>...</p>
            `
        },
        {
            title: 'Giveaway Announcement',
            content: `
                <p>The exclusive $SFT Giveaway will kick off once the token is bonded to Raydium!<br>...</p>
            `
        }
    ];

    // Chama as funções de randomização
    getRandomSection('highlight-title-first', firstSection);
    getRandomSection('highlight-title-second', secondSection);
    getRandomSection('giveaway-title', giveawaySection);
});
