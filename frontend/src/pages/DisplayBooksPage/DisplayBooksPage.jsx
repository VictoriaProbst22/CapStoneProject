const DisplayBooks = () => {
    return ( <div>
        <h2>Hello World!</h2>
        <script type="text/javascript" src="//books.google.com/books/previewlib.js"></script>
        <script type="text/javascript">
        GBS_insertEmbeddedViewer('ISBN:0786496576',600,500);
        google.books.load()
        </script>
    </div> );
}
 
export default DisplayBooks;