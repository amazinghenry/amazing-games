const Foooter = () => {
    const thisYear = new Date()
    const date = thisYear.getFullYear()

    return (
        <footer className="container-fluid">
            <div className="container">
                <div className="footer-content">  © {date} Copyrights AmazingHenry All Rights Reserved</div>
            </div>
        </footer>
    );
}
 
export default Foooter;