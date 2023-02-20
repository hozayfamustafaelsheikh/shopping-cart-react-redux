function Menu() {
    return (
        <>
            {/* Left Menu */}
            <div className="menu">
                {/* Menu List */}
                <div className="menu-list">
                    {/* First item */}
                    <div className="menu-list-item-first">
                        <div className="menu-list-item-icon-first">
                            <i className="fa-solid fa-store"></i>
                        </div>
                    </div>
                    {/* End of Menu Item */}
                    {/* Meun Item active by default */}
                    <a className="menu-list-item active">
                        <div className="menu-list-item-icon">
                            <span className="material-symbols-rounded"> home </span>
                        </div>
                    </a>
                    {/* End of Menu Item */}
                    {/* Menu Item */}
                    <a className="menu-list-item">
                        <div className="menu-list-item-icon">
                            <span className="material-symbols-rounded"> verified </span>
                        </div>
                    </a>
                    {/* End of Menu Item */}
                    {/* Menu Item */}
                    <a className="menu-list-item">
                        <div className="menu-list-item-icon">
                            <span className="material-symbols-rounded"> timeline </span>
                        </div>
                    </a>
                    {/* End of Menu Item */}
                    {/* Menu Item */}
                    <a className="menu-list-item">
                        <div className="menu-list-item-icon">
                            <span className="material-symbols-rounded"> mail </span>
                        </div>
                    </a>
                    {/* End of Menu Item */}
                    {/* Menu Item */}
                    <a className="menu-list-item">
                        <div className="menu-list-item-icon">
                            <span className="material-symbols-rounded"> notifications </span>
                        </div>
                    </a>
                    {/* End of Menu Item */}
                    {/* Menu Item */}
                    <a className="menu-list-item">
                        <div className="menu-list-item-icon">
                            <span className="material-symbols-rounded"> settings </span>
                        </div>
                    </a>
                    {/* End of Menu Item */}
                    {/* Menu Item */}
                    <a className="menu-list-item logout-item">
                        <div className="menu-list-item-icon">
                            <span className="material-symbols-rounded logout-item-icon">
                                upload
                            </span>
                        </div>
                    </a>
                    {/* End of Menu Item */}
                </div>
                {/* End of Menu List */}
            </div>
            {/* End of Menu */}
        </>
    );
}

export default Menu;