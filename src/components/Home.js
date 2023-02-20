var items = [
    {
        id: 1,
        category: "Hot Dishes",
        items: [
            {
                id: 1,
                name: "Spicy seasoned seafood noodles",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-01.jpg",
            },
            {
                id: 2,
                name: "Salted Pasta with mushroom sauce",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-02.jpg",
            },
            {
                id: 3,
                name: "Beef dumpling in hot and sour soup",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-03.jpg",
            },
            {
                id: 4,
                name: "Healthy noodle with spinach leaf",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-04.jpg",
            },
            {
                id: 5,
                name: "Hot spicy fried rice with omelet",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-05.jpg",
            },
            {
                id: 6,
                name: "Spicy instant noodle with special omelette",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-06.jpg",
            },
        ],

    },
    {
        id: 2,
        category: "Cold Dishes",
        items: [
            {
                id: 1,
                name: "Healthy noodle with spinach leaf",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-04.jpg",
            },
            {
                id: 2,
                name: "Salted Pasta with mushroom sauce",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-02.jpg",
            },
            {
                id: 3,
                name: "Spicy seasoned seafood noodles",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-01.jpg",
            },
            {
                id: 4,
                name: "Spicy instant noodle with special omelette",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-06.jpg",
            },
            {
                id: 5,
                name: "Beef dumpling in hot and sour soup",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-03.jpg",
            },
            {
                id: 6,
                name: "Hot spicy fried rice with omelet",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-05.jpg",
            },
        ],

    },
    {
        id: 3,
        category: "Soup",
        items: [
            {
                id: 1,
                name: "Hot spicy fried rice with omelet",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-05.jpg",
            },
            {
                id: 2,
                name: "Salted Pasta with mushroom sauce",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-02.jpg",
            },
            {
                id: 3,
                name: "Healthy noodle with spinach leaf",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-04.jpg",
            },
            {
                id: 4,
                name: "Spicy instant noodle with special omelette",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-06.jpg",
            },
            {
                id: 5,
                name: "Spicy seasoned seafood noodles",
                price: "$ 2.29",
                avaliable: "20 Bowls available",
                image: "item-01.jpg",
            },
            {
                id: 6,
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
                                name="search"
                                id="search"
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
                                items.map((item, index) => (
                                    <li key={item.id} className={"tab-item " + (index === 0 ? "active" : "") } data-tabname={item.id}>{item.category}</li>
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
                            items.map((item_category, category_index) => (
                                <div className={"tab-body " + item_category.id + (category_index === 0 ? " active" : "")} key={item_category.id}>
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
                                            item_category.items.map((item, item_index) => (
                                                <div className={"item " + (item_index === 0 ? " active" : "")} key={item.id}>
                                                    {/* Home Page Item Image */}
                                                    <div className="image">
                                                        <img src={require("../assets/img/" + item.image)} alt="" />
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