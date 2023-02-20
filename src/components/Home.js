var items = [
    {
        category: "Hot Dishes",
        items: [
            {
                name: "Spicy seasoned seafood noodles",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-01.jpg",
            },
            {
                name: "Salted Pasta with mushroom sauce",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-02.jpg",
            },
            {
                name: "Beef dumpling in hot and sour soup",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-03.jpg",
            },
            {
                name: "Healthy noodle with spinach leaf",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-04.jpg",
            },
            {
                name: "Hot spicy fried rice with omelet",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-05.jpg",
            },
            {
                name: "Spicy instant noodle with special omelette",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-06.jpg",
            },
        ],

    },
    {
        category: "Cold Dishes",
        items: [
            {
                name: "Healthy noodle with spinach leaf",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-04.jpg",
            },
            {
                name: "Salted Pasta with mushroom sauce",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-02.jpg",
            },
            {
                name: "Spicy seasoned seafood noodles",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-01.jpg",
            },
            {
                name: "Spicy instant noodle with special omelette",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-06.jpg",
            },
            {
                name: "Beef dumpling in hot and sour soup",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-03.jpg",
            },
            {
                name: "Hot spicy fried rice with omelet",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-05.jpg",
            },
        ],

    },
    {
        category: "Soup",
        items: [
            {
                name: "Hot spicy fried rice with omelet",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-05.jpg",
            },
            {
                name: "Salted Pasta with mushroom sauce",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-02.jpg",
            },
            {
                name: "Healthy noodle with spinach leaf",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-04.jpg",
            },
            {
                name: "Spicy instant noodle with special omelette",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-06.jpg",
            },
            {
                name: "Spicy seasoned seafood noodles",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-01.jpg",
            },
            {
                name: "Beef dumpling in hot and sour soup",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-03.jpg",
            },
        ],

    },
];
function Home() {
    return (
        <>
            {/* Page Content */}
            <div className="page">
                {/* Page Header */}
                <div className="page-header">
                    {/* Page Header Title */}
                    <div className="header-title">
                        <h1>Jaegar Resto</h1>
                        <h3>Tuesday, 2 Feb 2021</h3>
                    </div>
                    {/* End of Header Title */}
                    {/* Search Field */}
                    <div className="header-search">
                        <div className="search">
                            <i className="fa-solid fa-search"></i>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search for food, coffe, etc.."
                            />
                        </div>
                    </div>
                    {/* End of Search Field */}
                </div>
                {/* End of Page Header */}

                {/* Home Page Tabs */}
                <div className="tabs">
                    {/* Home Page Tabs Header*/}
                    <div className="tabs-header">
                        {/* Home Page Tabs Header Items*/}
                        <ul className="tabs-items">

                            {/* Home Page Tabs Header Item */}
                            {
                                items.map(item => (
                                    <li className="tab-item" data-tabname={item.category}>{item.category}</li>
                                ))
                            }
                            {/* End of Home Page Tabs Header Item */}
                        </ul>
                        {/* End of Home Page Tabs Header Items */}
                    </div>
                    {/* End of Home Page Tabs Header */}

                    {/* Home Page Tabs Body */}
                    <div className="tabs-body">
                        {/* Home Page Tab Body */}
                        {
                            items.map(item_category => (
                                <div class={"tab-body " + item_category.category} key={item_category.category}>
                                    {/* Home Page Tabs Body Header */}
                                    <div className="tab-body-header">
                                        {/* Home Page Tabs Body Header Title */}
                                        <div className="tab-body-title">
                                            <h1>{item_category.category}</h1>
                                        </div>
                                        {/* End of Home Page Tabs Body Header Title */}
                                        {/* Home Page Tabs Body Header DropDwon */}
                                        <div className="tab-body-select">
                                            <select name="" id="">
                                                <option defaultValue="">Dining</option>
                                                <option defaultValue="">Dining</option>
                                                <option defaultValue="">Dining</option>
                                            </select>
                                        </div>
                                        {/* End of Home Page Tabs Body Header DropDwon */}
                                    </div>
                                    {/* End of Home Page Tabs Body Header */}
                                    {/* Home Page Items */}
                                    <div className="items">
                                        {/* Home Page Item */}
                                        {
                                            item_category.items.map(item => (

                                                <div className="item" key={item.name}>
                                                    {/* Home Page Item Image */}
                                                    <div className="image">
                                                        <img src={"../assets/img/" + item.image} alt="" />
                                                    </div>
                                                    {/* End of Home Page Item Image */}
                                                    {/* Home Page Item Details */}
                                                    <div className="details">
                                                        <h1>{item.name}</h1>
                                                        <h3>{item.price}</h3>
                                                        <p>{item.avaliable}</p>
                                                    </div>
                                                    {/* End of Home Page Item Details */}
                                                </div>
                                            ))
                                        }
                                        {/* End of Home Page Item */}
                                    </div>
                                    {/* End of Home Page Items */}
                                </div>
                            ))
                        }
                        {/* End of Home Page Tab Body */}
                    </div>
                    {/* End of Home Page Tabs Body */}
                </div>
            </div>
            {/* End of Page Content */}

        </>);
}

export default Home;