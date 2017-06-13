var w = $(window),
	body = $('body'),
	popup = $('.popup'),
	popupContainer = $('.popup__wrapper'),
	popupModal = $('.popup__wrapper_modal'),
	popupCallback = $('.popup__wrapper_callback'),
	popupFeedback = $('.popup__wrapper_feedback'),
	popupClose = $('.popup__close'),
	popupBg = $('.popup__bg');
	popupMessage = $('#popup .message'),
	speed = 400;


$('button#sticks').click(function() {
	$(this).toggleClass('close');
});


$('.input-tel').mask("+7 (999) 999-99-99");

$('input[name=name]').on('keyup keypress', function(e) {
    var lettersNew = lettersRU + lettersEN + " ";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

$('input[name=email]').on('keyup keypress', function(e) {
    var lettersNew = lettersEN + "@-._";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

function abs(object) {
	var scrollTop = body.scrollTop(),
    	height = body.height();
	object.css('padding-top', scrollTop).fadeIn(speed);
	popupBg.css('height', body.height());
}

$('.callbackBtn').click(function() {
	abs(popup);
	popupCallback.fadeIn(speed);
});


$('.modalBtn').click(function() {
	$(this).removeAttr('href');
	abs(popup);
	popupModal.fadeIn(speed);
});


$('.feedbackBtn').click(function() {
	abs(popup);
	popupFeedback.fadeIn(speed);
});



popupClose.click(function() {
	hiddePopup();
});

popupBg.click(function() {
	hiddePopup();
});


function hiddePopup() {
	popup.fadeOut(speed);
	popupContainer.fadeOut(speed);
}




function dropDown() {
	$('.drop-down__name').click(function() {
		var parent = $(this).parents($('.drop-down')),
			list = $(this).siblings('.drop-down__list');
		$(this).toggleClass('rotate');
		list.toggleClass('block');

	});
	$('.drop-down__list__item label').click(function() {
		var html = $(this).html();
		var parent = $(this).parents('.drop-down');
		var name = parent.find('p');
		name.html(html);
	});
}

dropDown();

// popupForm.find('form').submit(function() {
// 	$.ajax({
// 	    type: "POST",
// 	    url: "/order.php",
// 	    data: $(this).serialize()
// 	}).done(function() {
// 	    // popupForm.css('display','none');
// 	    // popupMessage.css('display','block');
// 	});
// 	return false;
// });

var buttonTable = $('.products__buttons__table'),
	buttonList = $('.products__buttons__list');

function productsViewClick(add, remove) {
	remove.removeClass('select');
	add.addClass('select');
}

function productsViewDefault(){
	if (buttonTable.hasClass('select')) {
		$('.product-container').addClass('in-table');
	} else {
		$('.product-container').removeClass('in-table');
	}
}


productsViewDefault();
productsViewDefault();


$('.products__buttons__table').click(function() {
	productsViewClick(buttonTable, buttonList);
	productsViewDefault();
});

$('.products__buttons__list').click(function() {
	productsViewClick(buttonList, buttonTable);
	productsViewDefault();
});



$('.filter__slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-slider-arrow-left_gray"></i></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-slider-arrow-left_gray rotate180"></i></button>'
})
$('.reviews__list').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-slider-arrow-left_gray"></i></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-slider-arrow-left_gray rotate180"></i></button>'
})
$('.why-we__slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-slider-arrow-left_gray"></i></button>',
	nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-slider-arrow-left_gray rotate180"></i></button>'
})





function rangeToogle(object) {
	if (Number($('.product .data-product__price var').html()) < object.val()) {
		$('.product .data-product__price var').parents('.product').slideUp(200);
	} else {
		$('.product .data-product__price var').parents('.product').slideDown(200);
	}
}

// rangeToogle(range);

// range.change(function() {
// 	rangeToogle(range);
// });
$(document).ready(function() {
	var cartList = $('.cart__list'),
		cartOrder = $('.cart__order'),
		cartListHeight = cartList.height(),
		cartOrderHeight = cartOrder.height();
	if (cartListHeight>cartOrderHeight) {
		cartOrder.height(cartListHeight);
	} else {
		cartList.height(cartOrderHeight);
	}
	var menu = $('.menu');
	function fixedMenu() {
		var menuPosY = menu.offset().top;
		if (w.scrollTop()>=63) {
			menu.addClass('fixedMenu');
		} else if (w.scrollTop()<63) {
			menu.removeClass('fixedMenu');
		}
	}
	fixedMenu();
	w.on('scroll', function() {
		fixedMenu();
	});
}) 


var range = $('.products__range__this'),
	rangeValue = $('.rangeValue');

function rangeFun() {
	rangeValue.html(range.val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + "Р");
	if (Number()) {

	}
}

rangeFun();


range.change(function() {
	rangeFun();
});


$('.data-product__button-more').click(function() {
	var parent = $(this).parents('.product-container'),
		reviews = parent.find('.reviews_product');
	reviews.find('.reviews__item').css('width', '314px !important');
	reviews.slideToggle(speed);
});



$('.products__nav li').click(function() {
	$('.product-container').slideUp(0);
	$('.products__nav li').removeClass('select');
	$(this).addClass('select');
	var attr = $(this).attr('data-target');
	$('.product-container' + attr).show(0);

	if ($(this).hasClass('all')) {
		$('.product-container').show(0);
		// alert(1);
	}
});

$('.filter__slider__item__button').click(function() {
	var attr = $(this).attr('data-target');
	
	if ($('.products__nav li').hasClass('select')) {
		var attrNavItem = $('.products__nav li.select').attr('data-target');
		// alert(attrNavItem);
		$('.product-container').slideUp(0);
		$('.product-container' + attr + attrNavItem).slideDown(0);
	} else {

	}
})




if ($('.catalog__nav__item').hasClass('select')) {
	var attr = $('.catalog__nav__item').attr('data-target');
	$('.catalog__img__item' + attr).show();
}

$('.catalog__nav__item').click(function() {
	$('.catalog__img__item').slideUp(0);
	$('.catalog__nav__item').removeClass('select')
	$(this).addClass('select');
	var attr = $(this).attr('data-target');
	$('.catalog__img__item' + attr).show();
});

$('.collection__nav__item').click(function() {
	$('.collection__list__item').slideUp(0);
	$('.collection__nav__item').removeClass('select')
	$(this).addClass('select');
	var attr = $(this).attr('data-target');
	$('.collection__list__item' + attr).show();
});


// var FirstName;

// alert(prompt("Как Вас зовут", FirstName));

// document.cookie = FirstName;

// var priceVals = $('.data-product__price var');

// var priceValsElementArray = $('.data-product__price var').map(function(){
//     return $('.data-product__price').find();
// }).get();

// var priceValsHtmlArray = $('.data-product__price var').map(function(){
//     return $('.data-product__price var').html();
// }).get();

// console.log(priceValsElementArray);

// for (var i = priceValsHtmlArray.length - 1; i >= 0; i--) {
// 	priceValsHtmlArray[i].html(priceValsElementArray[i]);
// }



var cart = $('.cart .table'),
	numHtml = $('.cart__summary__price var'),
	skidkaHtml = $('.cart__summary__discount var');


var productsForm = [],
	priceForm = [];


function bottomFunAddCart(titleikus, priceikus) {
	if (newSumma >= 5000 && newSumma < 14999) {
		skidkaHtml.html(5);
	} else if (newSumma >= 10000 && newSumma < 14999) {
		skidkaHtml.html(15);
	} else if (newSumma >= 15000 && newSumma < 19999) {
		skidkaHtml.html(25);
	} else if (newSumma >= 20000) {
		skidkaHtml.html(35);
	}
	var num = Number(numHtml.html()),
		skidka = Number(skidkaHtml.html()),
		newSumma = num + priceikus;

	numHtml.html(newSumma);
	
	productsForm.push(titleikus);
	priceForm.push(priceikus);

	console.log(productsForm);
	console.log(priceForm);
}



function addCart1(button, titleus, priceus) {
	button.click(function() {
		var top = $("#cart").offset().top;
		// body.animate({scrollTop: top - 60}, 500);

		var title = titleus.html(),
			price = Number(priceus.html());

		cart.append('<div class="table__row row"><div class="table__col col">' + title + '</div><div class="table__col color-red bold col"><var>' + price + ' Р</var></div></div>');

		bottomFunAddCart(title, price);
		
	});
}

addCart1($('.product__data .data-product__button'), $('.product__title'), $('.data-product__price var'));
addCart1($('.hits__item .data-product__button'), $('.hits__item__title'), $('.hits__item .data-product__price var'));
function addCart2(button, titleus, priceus, nameGroup) {
	button.click(function() {
		var top = $("#cart").offset().top;

		var price = Number(priceus.html()),
			nameGroupeNew = nameGroup.html(),
			father = titleus.parent('.collection__list__item'),
			title = titleus;


		cart.append('<div class="table__row row"><div class="table__col col">Набор  <span class="name__group">' +	nameGroupeNew + '</span>' + titleus + '</div><div class="table__col color-red bold col"><var>' + price + ' Р</var></div></div>');

		function mapElement($(father + " " " "))) {

			var priceValsHtmlArray = $('.collection__list__item__here__name').map(function(){
		   		return $(this).html();
			}).get();
			


			console.log(priceValsHtmlArray);
		}

		bottomFunAddCart(title, price);
	});
}


addCart2($('.collection__list__item__data__button'), ($('.collection__list__item__name')), $('.collection__list__item__data__price var'), $('.collection__list__item__name'))