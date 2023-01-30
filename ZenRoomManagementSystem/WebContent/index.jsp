<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">

<title>Zen Room Management System</title>
<link href="css/index.css"  rel="stylesheet" type="text/css">
</head>
<body>

	  <header>
        <a href="#" class="logo"><span>R</span>oyal Lotus Hotel</a>
        <nav class="navbar">
            <a href="#home">home</a>
            <a href="#gallery">gallery</a>
            <a href="#book">book</a>
            <a href="#policies">policies</a>
            <a href="contact.jsp">contact</a>
           
        </nav>
        <div class="icons">
            
            <i class="fas fa-user" id="login-btn"></i>
            <a href="adminlogin.jsp">Admin Login</a>
        </div>
    </header>
    
   
	<section class="home" id="home">
		<div class="content">
			<h3>RECONNECT WITH NATURE.</h3>
			<p>Royal Lotus Hotel is all about luxury aesthetics and is the
				perfect sanctuary with a soul.</p>
		</div>

		<div class="controls">
			<span class="img-btn active"
				data-src="https://images.trvl-media.com/hotels/19000000/18020000/18018000/18017942/0b116777_z.jpg"></span>
			<span class="img-btn"
				data-src="https://lifebeyondsportmedia.com/bestanden/Travel-Samsara-Ubud-Bali/Samsara_Ubud_800x600_1.jpg"></span>
			<span class="img-btn"
				data-src="https://images.trvl-media.com/hotels/19000000/18020000/18018000/18017942/006709d4_z.jpg"></span>
			<span class="img-btn"
				data-src="https://cdn.shopify.com/s/files/1/0046/2471/1793/products/asamsara-ubud-aerial-two-and-three-bedroom-pool-villa_1000x.jpg?v=1625057491"></span>
			<span class="img-btn"
				data-src="https://melatidanes.com/wp-content/uploads/2020/11/samsara-ubud-2-768x432.jpg"></span>
		</div>

		<div class="image-container">
			<img
				src="https://images.trvl-media.com/hotels/19000000/18020000/18018000/18017942/0b116777_z.jpg"
				id="image-slider">
		</div>
	</section>
	
	
	<section class="gallery" id="gallery">
		<h1 class="heading">
			<span>g</span> <span>a</span> <span>l</span> <span>l</span> <span>e</span>
			<span>r</span> <span>y</span>
		</h1>

		<div class="box-container">
			<div class="box">
				<img
					src="https://lifebeyondsportmedia.com/bestanden/Travel-Samsara-Ubud-Bali/Samsara_Ubud_800x600_2.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://www.traveldailynews.asia/sites/default/files/styles/large/public/1970/01//Samsara_Ubud%2C_Bali_-_Indonesia.jpg?itok=QYoHbWK5"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://content.r9cdn.net/kimg/46/99/e5c53c8b-5ba0d581-8.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://www.theyakmag.com/wp-content/uploads/2019/01/Samsara-Minyak-Jan-2-online-7.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://ak-d.tripcdn.com/images/220n0u000000jb11v3DE5_Z_550_412_R5_Q70_D.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://nowbali.co.id/wp-content/uploads/2017/04/NIT-Samsara-to-Open-in-Ubud.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfifURWBbnvgP6bb-er6_eZ5nUwSKadYNIw&usqp=CAU"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img src="https://pbs.twimg.com/media/ErvhqeqVEAADnEL.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1081497.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/161867664.jpg?k=89969934fa8b79316a883f87c287c09aa427f86450ba0c8ae66cb4f74a59d4d0&o=&hp=1"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://exp.cdn-hotels.com/hotels/19000000/18020000/18018000/18017942/041bb96c_z.jpg?impolicy=fcrop&w=500&h=333&q=medium"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://tourist-images-prd-s3.s3.eu-west-1.amazonaws.com/43pli679t13bxbckkgk1rjly4ywz"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyEDpLwBMff5bgz-0pa8cf0WfCzZkQ63tqHQ&usqp=CAU"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzi0M5CSzrNyc7mIWHBI8MqG0sGd9PgEc2-g&usqp=CAU"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://theasiacollective.com/wp-content/uploads/2019/05/bisma-1-e1573787055275.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://theasiacollective.com/wp-content/uploads/2019/05/bisma-2-e1573787071123.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>

			<div class="box">
				<img
					src="https://theasiacollective.com/wp-content/uploads/2019/06/113150652.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/41/69/39/pool.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://theasiacollective.com/wp-content/uploads/2019/06/215389428.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://theasiacollective.com/wp-content/uploads/2019/06/40960739.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
			<div class="box">
				<img
					src="https://theasiacollective.com/wp-content/uploads/2019/06/first-2.jpg"
					alt="hotel" style="width: 100%" onclick="myFuction(this);">
			</div>
		</div>
		<div class="container">
			<span onclick="this.parentElement.style.display='none'"
				class="closebtn">&times;</span> <img id="expandedImg"
				style="width: 100%">
			<div id="imgtext"></div>
		</div>
	</section>

	<section class="book" id="book">
		<h1 class="heading">
			<span>b</span> <span>o</span> <span>o</span> <span>k</span> <span
				class="space"></span> <span>n</span> <span>o</span> <span>w</span>
		</h1>

		<div class="box-container">

			<div class="box">
				<img
					src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/363916/363916/samsara-ubud-1-bedroom-villa-02.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
					alt="1 bedroom">
				<div class="content">
					<h3>
						<i class="fas fa-bed"></i>1 Bedroom Pool Villa
					</h3>
					<p>Our One-Bedroom Pool Villas are generously sized (122sqm)
						with a heated infinity pool that provide ample space for couples
						to unwind and play. Each villas bathrooms feature luxurious
						Makassar marble, double vanities, deep soaking bathtub and
						separate indoor and outdoor showers. The interiors are a mix of
						contemporary Balinese decor, rich teak furnishing and exotic
						fabrics.</p>
					<div class="price">
						IDR 2,800,000
						<p>Cost for 1 night, 2 guests</p>
					</div>
					<a href="booking.jsp" class="btn">Book</a>
				</div>
			</div>

			<div class="box">
				<img
					src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/440813/440813/samsara-1-bedroom-pool-villa-08.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
					alt="1 bedroom Deluxe">
				<div class="content">
					<h3>
						<i class="fas fa-bed"></i>1 Bedroom Deluxe Pool Villa
					</h3>
					<p>Upgrade your stay! Why not spoil yourself and your loved one
						with undisturbed lush tropical jungle views? Sitback and relax in
						your private heated infinity pool whilst appreciating the magical
						view that nature has to offer. The interiors and artworks are
						inspired from the bygone era of Bali and features a king-size bed,
						double vanities, deep soaking bathtub and separate indoor and
						outdoor showers.</p>
					<div class="price">
						IDR 4,000,000
						<p>Cost for 1 night, 2 guests</p>
					</div>
					<a href="booking.jsp" class="btn">Book</a>
				</div>
			</div>
			<div class="box">
				<img
					src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/460386/460386/samsara-ubud-two-bedroom-pool-villa-exterior.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
					alt="2 bedroom">
				<div class="content">
					<h3>
						<i class="fas fa-bed"></i>2 Bedroom Pool Villa
					</h3>
					<p>Our 198 sqm two-storey pool villas enjoy stunning views of
						the resort and blissful surroundings. The ground floor features a
						king-size bedroom, stylish living and dining area and access to a
						generously sized heated infinity pool. Upper floor features an
						elegant seating area and king-size bedroom that leads to a vast
						marble bathroom with deep soaking bathtub, separate rain shower
						and a twin vanity unit.</p>
					<div class="price">
						IDR 5,200,000
						<p>Cost for 1 night, 2 guests</p>
					</div>
					<a href="booking.jsp" class="btn">Book</a>
				</div>
			</div>

			<div class="box">
				<img
					src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/452751/452751/samsara-ubud-three-bedroom-pool-villa-03.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
					alt="3 bedroom">
				<div class="content">
					<h3>
						<i class="fas fa-bed"></i>3 Bedroom Pool Villa
					</h3>
					<p>The 245 sqm two-storey three-bedroom pool villas is our most
						spacious accommodation, offering the ultimate blend of Balinese
						style and timeless elegance. The ground floor features a king-size
						bedroom and a stylish separate living and dining area.</p>
					<div class="price">
						IDR 6,000,000
						<p>Cost for 1 night, 2 guests</p>
					</div>
					<a href="booking.jsp" class="btn">Book</a>
				</div>
			</div>

			<div class="box">
				<img
					src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/460387/460387/samsara-ubud-two-and-three-bedroom-pool-villa.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
					alt="4 bedroom">
				<div class="content">
					<h3>
						<i class="fas fa-bed"></i>4 Bedroom Pool Villa
					</h3>
					<p>The upper floor features two king-size bedrooms with private
						access to a marble bathroom with twin vanity unit, deep soaking
						bathtub and a separate shower area. The outdoor area features a
						generously sized private heated infinity pool and a gazebo for you
						to enjoy the balmy Balinese nights with your family and/or and
						friends.</p>
					<div class="price">
						IDR 7,200,000
						<p>Cost for 1 night, 2 guests</p>
					</div>
					<a href="booking.jsp" class="btn">Book</a>
				</div>
			</div>

			<div class="box">
				<img
					src="https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/452747/452747/samsara-ubud-two-bedroom-pool-villa-02.jpg?auto=format,compress&fit=crop&crop=entropy&w=300&h=200&q=55"
					alt="4 bedroom">
				<div class="content">
					<h3>
						<i class="fas fa-bed"></i>4 Bedroom Deluxe Pool Villa
					</h3>
					<p>The interiors and artworks are inspired from the bygone era
						of Bali and features a king-size bed, double vanities, deep
						soaking bathtub and separate indoor and outdoor showers.
					<div class="price">
						IDR 7,800,000
						<p>Cost for 1 night, 2 guests</p>
					</div>
					<a href="booking.jsp" class="btn">Book</a>
				</div>
			</div>
		</div>
	</section>



	<section class="policies" id="policies">
		<h1 class="heading">
			<span>p</span> <span>o</span> <span>l</span> <span>i</span> <span>c</span>
			<span>e</span> <span>s</span>
		</h1>
		<div class="box-container">

			<div class="box">
				<h3>Check-in</h3>
				<p>Check-in from 3 PM - 6:30 AM Late check-in subject to
					availability Minimum check-in age - 17</p>
			</div>
			<div class="box">
				<h3>Check-out</h3>
				<p>Check-out before noon</p>
			</div>
			<div class="box">
				<h3>Special check-in instructions</h3>
				<p>To make arrangements for check-in please contact the property
					ahead of time using the information on the booking confirmation If
					you are planning to arrive after midnight please contact the
					property in advance using the information on the booking
					confirmation Guests must contact the property in advance for
					check-in instructions; front desk staff will greet guests on
					arrival</p>
			</div>
			<div class="box">
				<h3>Renovations and closures</h3>
				<p>In accordance with local regulations, all visitors must
					remain within the property during Seclusion Day (Nyepi)/Hindu New
					Year for a 24-hour period (starting at 6 AM). Seclusion Day
					typically falls in March or April (dates subject to change each
					year). Check-in and check-out will not be possible on that date.
					devanahalli Airport (Bali International Airport) is also closed on
					Seclusion Day.</p>
			</div>
			<div class="box">
				<h3>Access methods</h3>
				<p>Staffed front desk</p>
			</div>
			<div class="box">
				<h3>Pets</h3>
				<p>No pets or service animals allowed</p>
			</div>
			<div class="box">
				<h3>Children and extra beds</h3>
				<p>Children are welcome Kids stay free! One child 11 years old
					or younger stays free when using existing bedding Rollaway/extra
					beds are not available. Cots (infant beds) are not available</p>
			</div>
			<div class="box">
				<h3>Optional extras</h3>
				<p>The following fees and deposits are charged by the property
					at the time of service, check-in or check-out. Fee for
					cooked-to-order breakfast: IDR 450000 for adults and IDR 225000 for
					children (approximately) Airport shuttle fee: IDR 785000 per
					vehicle (one way) The above list may not be comprehensive. Fees and
					deposits may not include tax and are subject to change.</p>
			</div>

			<div class="box">
				<h3>Payment types at the property</h3>
				<img
					src=" https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
					alt="master-card"> <img
					src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
					alt="american-express"> <img
					src="	https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
					alt="visa">
			</div>
		</div>
	</section>



	<section class="footer">

		<div class="box-container">


			<div class="box">
				<h3>about us</h3>
				<p>ROYAL LOTUS HOTEL, We understand that the definition of
					luxury varies from person to person and our guests can expect
					personalised services and genuine hospitality as part of the
					Samsara experience.</p>
			</div>
			<div class="box">
				<h3>branch locations</h3>
				<a href="#">india</a> <a href="#">USA</a> <a href="#">japan</a> <a
					href="#">france</a>
			</div>
			<div class="box">
				<h3>quick links</h3>
				<a href="#">home</a> <a href="#">gallery</a> <a href="#">book</a> <a
					href="#">policies</a> <a href="#">contact</a>

			</div>
			<div class="box">
				<h3>follow us</h3>
				<a href="#">facebook</a> <a href="#">instagram</a> <a href="#">twitter</a>
				<a href="#">linkedin</a>
			</div>

		</div>

	</section>
	<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
	<script src=".\script.js"></script>
</body>
</html>