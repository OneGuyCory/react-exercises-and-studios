export default function BookList() {
   let pageTitle = "Books To Read";
   let book1 = "https://images.penguinrandomhouse.com/cover/9780307387899";
   let book2 = "https://creativeaction.network/cdn/shop/products/the-collected-tales-of-edgar-allan-poe-by-adam-s-doyle-12-by-18-print-unframed-print-recovering-the-classics-6922521923_2048x.jpg?v=1600034116";
   let book3 = "https://m.media-amazon.com/images/I/81tBoQP5V+L.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Image showing the book cover for The Road" />
         <img src={book2} alt="Image showing the book cover for a collection of works of Edgar Allan Poe" />
         <img src={book3} alt="Image showing the book cover for The Eye of The World" />
      </div>      
   );
}