let payments = [
	{
		value: 5,
		thank: "Thanks for the cheers, CHEERS!!",
	},
	{
		value: 10,
		thank: "Thanks for the DOUBLE, I really like it",
	},
	{
		value: 50,
		thank: "Oh thank you, you gave me a new MONTH of coffee",
	},
];

function payWithPaypal(place, option) {
	place.parentElement.parentElement.innerHTML = `
        <div id="smart-button-container">
          <div style="text-align: center;">
            <div id="paypal-button-container"></div>
          </div>
        </div>
        <script>`;
	paypal
		.Buttons({
			style: {
				shape: "rect",
				color: "gold",
				layout: "vertical",
				label: "paypal",
			},
			createOrder: function (data, actions) {
				return actions.order.create({
					purchase_units: [
						{ amount: { currency_code: "USD", value: payments[option].value } },
					],
				});
			},

			onApprove: function (data, actions) {
				return actions.order.capture().then(function (orderData) {
					// Full available details
					console.log(
						"Capture result",
						orderData,
						JSON.stringify(orderData, null, 2)
					);

					// Show a success message within this page, e.g.
					const element = document.getElementById(
						"paypal-button-container"
					);
					element.innerHTML = "";
					element.innerHTML = `<h1>${payments[option].thank}</h1>`;

					// Or go to another URL:  actions.redirect('thank_you.html');
				});
			},

			onError: function (err) {
				console.log(err);
			},
		})
		.render("#paypal-button-container");
}
