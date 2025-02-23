const Langs = {
    am: {
        services: 'Ծառայություններ',
        contact_us: 'Կապ մեզ հետ',
        activity: 'Գործունեություն',
        delivery_service: 'Առաքման ծառայություն',
        in_yerevan: 'Երևանում (մասնավորապես կենտրոն)',
        courier_services: 'Սուրհանդակային ծառայություններ.',
        services_more: '<b>նամակների, փաթեթների, ծանրոցների</b> «դռնից դուռ» առաքում։',
        driver_service: 'Սթափ վարորդ  ծառայություն (վարորդի տեղափոխում նրա ավտոմեքենայով)',
        services_more_two: '<b>ՆԱՄԱԿՆԵՐԻ, ՓԱՍՏԱԹՂԹԵՐԻ, ՓԱԹԵԹՆԵՐԻ, ԾԱՆՐՈՑՆԵՐԻ</b> ԱՌԱՔՈՒՄ ԵՐևԱՆՈՒՄ (Մասնավորապես կենտրոնում)',
        taxi_services: 'Տաքսի - ծառայություններ',
        driver_service_two: 'Վարորդի ծառայություններ',
        means_of_communication: 'Կապի միջոցներ',
        all_rights_reserved: `© ${new Date().getFullYear()} Բոլոր իրավունքները պաշտպանված են`
    },
    ru: {
        services: 'Услуги',
        contact_us: 'Связаться с нами',
        activity: 'Деятельность',
        delivery_service: 'Служба доставки',
        in_yerevan: 'в Ереване (особенно центр)',
        courier_services: 'Курьерская служба.',
        services_more: 'Доставка <b>писем, посылок</b> «от двери до двери».',
        driver_service: 'Услуга «Трезвый водитель» (вождение водителя на его автомобиле)',
        services_more_two: 'ДОСТАВКА <b>ПИСЕМ, ДОКУМЕНТОВ, ПОСЫЛОК</b> ПО ЕРЕВАНЕ (Особенно в центре)',
        taxi_services: 'Услуги - такси',
        driver_service_two: 'Услуги водителя',
        means_of_communication: 'Средства связи',
        all_rights_reserved: `© ${new Date().getFullYear()} Все права защищены`
    },
    en: {
        services: 'Services',
        contact_us: 'Contact us',
        activity: 'Activity',
        delivery_service: 'Delivery service',
        in_yerevan: 'in Yerevan (especially the center)',
        courier_services: 'Courier services.',
        services_more: 'door-to-door delivery of <b>letters, packages, parcels</b>.',
        driver_service: 'Sober driver service (driving the driver in his car)',
        services_more_two: 'DELIVERY OF <b>LETTERS, DOCUMENTS, PACKAGES, PARCELS</b> IN YEREVAN (Especially in the center)',
        taxi_services: 'Taxi - services',
        driver_service_two: 'Driver services',
        means_of_communication: 'Means of communication',
        all_rights_reserved: `© ${new Date().getFullYear()} All rights reserved`
    }
};

const texts = document.querySelectorAll('*[l]');

texts.forEach(text=>{
    const curLang = localStorage.getItem('curLang');
    if(curLang){
        text.innerHTML = Langs[curLang][text.getAttribute('l')];
        document.querySelector('.language_two').value = curLang;
        document.querySelector('.language').value = curLang;
        return;
    }
    text.innerHTML = Langs['am'][text.getAttribute('l')];
});

setInterval(()=>{
    document.querySelector('.carousel-control-next').click();
}, 5000);

const changeLang = curLang => {
    localStorage.setItem('curLang', curLang);
    texts.forEach(text=>{
        text.innerHTML = Langs[curLang][text.getAttribute('l')];
    });
    document.querySelector('.language_two').value = curLang;
    document.querySelector('.language').value = curLang;
};