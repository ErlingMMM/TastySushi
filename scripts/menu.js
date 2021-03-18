const SushiModule = (function () {
    const sushis = [
        {
            title: "dry-fish",
            price: 80,
            image: "dry-fish.jpg",
            category: "maki"
        },
        {
            title: "flyfish-sushi",
            price: 100,
            image: "flyfish-sushi.jpg",
            category: "maki"
        },
        {
            title: "salmon-maki",
            price: 90,
            image: "salmon-maki.jpg",
            category: "salmon"
        },
        {
            title: "drsushi-plate-bigy-fish",
            price: 70,
            image: "sushi-plate-big.jpg",
            category: "plate"
        },
        {
            title: "sushi-plate-small",
            price: 80,
            image: "sushi-plate-small.jpg",
            category: "maki"
        },
        {
            title: "flyfish-sushi",
            price: 100,
            image: "flyfish-sushi.jpg",
            category: "maki"
        },
        {
            title: "tempura-plate",
            price: 90,
            image: "tempura-plate.jpg",
            category: "salmon"
        },
        {
            title: "wrap",
            price: 90,
            image: "wrap.jpg",
            category: "wrap"
        },
        {
            title: "tempura-prawn",
            price: 70,
            image: "tempura-prawn.jpg",
            category: "plate"
        }

    ];
    const getAllSushi = () => sushis;
    return { getAllSushi }
}());

export default SushiModule;

