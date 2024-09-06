import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const token = localStorage.getItem('token');
  const type = localStorage.getItem('type');
  const [list, setList] = useState([]);
  const [isBuyer, serIsBuyer] = useState(false);
  const [isSeller, serIsSeller] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState('name');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    axios.get('http://localhost:8080/board', { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          setList(res.data.list);
          if (type === '구매자') {
            serIsBuyer(true);
            serIsSeller(false);
          } else if (type === '판매자') {
            serIsBuyer(false);
            serIsSeller(true);
          }
        } else {
          alert('비정상 응답');
        }
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
        alert('서버 오류 발생');
      });
  }, [type]);

  const handleSearch = (event) => {
    event.preventDefault();

    let url = 'http://localhost:8080/board/search';
    if (searchCriteria === 'name') {
      url = `http://localhost:8080/board/title/${searchTerm}`;
    } else if (searchCriteria === 'seller') {
      url = `http://localhost:8080/board/writer/${searchTerm}`;
    } else if (searchCriteria === 'price') {
      url = `http://localhost:8080/board/price?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    }

    axios.get(url, { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          setList(res.data.list || res.data.dto);
        } else {
          alert('비정상 응답');
        }
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
        alert('서버 오류 발생');
      });
  };

  return (
    <div>
      <h2>Fruit</h2>

      {isSeller && <Link to="/board/add" id="add">Product Registration</Link>}
      {isBuyer && <Link to="/board/mybag" id="mybag">My Bag</Link>}

      <br />
      <br />

      <form onSubmit={handleSearch}>
        <label htmlFor="searchCriteria">검색 기준:</label>
        <select id="searchCriteria" name="searchCriteria" value={searchCriteria}
          onChange={(e) => setSearchCriteria(e.target.value)}
        >
          <option value="name">상품명</option>
          <option value="seller">상품 판매자</option>
          <option value="price">상품 가격대</option>
        </select>

        {searchCriteria === 'name' && (
          <div>
            <label htmlFor="searchTerm">상품명&nbsp;</label>
            <input type="text" id="searchTerm" name="searchTerm" value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} placeholder="상품명 입력" />
          </div>
        )}

        {searchCriteria === 'seller' && (
          <div>
            <label htmlFor="searchSeller">상품 판매자&nbsp;</label>
            <input type="text" id="searchSeller" name="searchSeller" value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} placeholder="상품 판매자 입력"
            />
          </div>
        )}

        {searchCriteria === 'price' && (
          <div id="priceRange">
            <label htmlFor="minPrice">가격대&nbsp;</label>
            <input type="number" id="minPrice" name="minPrice" value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)} placeholder="최소 가격"
              min="0" step="1"
            />&nbsp;~&nbsp;

            <label htmlFor="maxPrice"></label>
            <input type="number" id="maxPrice" name="maxPrice" value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="최대 가격"
              min="0" step="1"
            />
          </div>
        )}

        <button type="submit">검색</button>
      </form>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.num}  /
            <Link to={"/board/detail/" + item.num}>{item.title}</Link> /
            {item.writer.id}  /
            {item.price}  /
            {item.amount}  /
            <img src={'http://localhost:8080/read-img/' + item.img} className="simg" />
          </li>
        ))}
      </ul>

    </div>
  );
}