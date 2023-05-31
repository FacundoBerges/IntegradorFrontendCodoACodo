const PRICE = 200;
const STUDENT_DISCOUNT = 80;
const TRAINEE_DISCOUNT = 50;
const JUNIOR_DISCOUNT = 15;

document.getElementById("price").innerHTML = PRICE;
document.getElementById("studentDiscount").innerHTML = STUDENT_DISCOUNT;
document.getElementById("traineeDiscount").innerHTML = TRAINEE_DISCOUNT;
document.getElementById("juniorDiscount").innerHTML = JUNIOR_DISCOUNT;

const getDiscount = (category) => {
  let discount;

  switch (category) {
    case "student":
      discount = STUDENT_DISCOUNT;
      break;
    case "trainee":
      discount = TRAINEE_DISCOUNT;
      break;
    case "junior":
      discount = JUNIOR_DISCOUNT;
      break;
    default:
      discount = 0;
      break;
  }

  return discount / 100;
};

const getTicketDiscountPrice = (price, discount) => {
  if (discount <= 0 || isNaN(discount)) {
    return price;
  }

  return price - price * discount;
};

const calculatePrice = (price, quantity, discount) => {
  if (isNaN(quantity) || quantity < 1) {
    return 0;
  }

  return quantity * getTicketDiscountPrice(price, discount);
};

const getPrice = () => {
  const category = document.getElementById("category").value;
  const quantity = Math.round(
    parseInt(document.getElementById("quantity").value)
  );

  const discount = getDiscount(category);
  const totalPrice = calculatePrice(PRICE, quantity, discount);

  return totalPrice;
};

document.getElementById("submitButton").addEventListener("click", (e) => {
  e.preventDefault();

  totalPrice = getPrice();
  document.getElementById("totalPrice").innerHTML = totalPrice;
});

document.getElementById("resetButton").addEventListener("click", (e) => {
  document.getElementById("totalPrice").innerHTML = 0;
});
