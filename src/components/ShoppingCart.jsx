const products = [
  { id: 1, name: "무선 블루투스 이어폰", price: 59000 },
  { id: 2, name: "게이밍 키보드", price: 79000 },
  { id: 3, name: "스마트 워치", price: 129000 },
  { id: 4, name: "핸디 청소기", price: 89000 },
  { id: 5, name: "LED 스탠드", price: 35000 },
  { id: 6, name: "무선 마우스", price: 29000 },
  { id: 7, name: "아이폰 충전 케이블", price: 12000 },
  { id: 8, name: "USB 허브 4포트", price: 22000 },
  { id: 9, name: "커피 원두 1kg", price: 45000 },
  { id: 10, name: "무드등 가습기", price: 69000 },
  { id: 11, name: "라면 5개입", price: 5500 },
  { id: 12, name: "고양이 사료 2kg", price: 29000 },
];

const ShoppingCart = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">₩{product.price.toLocaleString()}</p>
      <button onClick={() => addToCart(product)}>장바구니 추가</button>
    </div>
  );
};

export default ShoppingCart;
