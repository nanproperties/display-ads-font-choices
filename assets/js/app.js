let fonts = {
	"Lato" : "font-family: 'Lato', sans-serif;",
	"Montserrat" : "font-family: 'Montserrat', sans-serif;",
	"Open Sans" : "font-family: 'Open Sans', sans-serif;",
	"Oxygen" : "font-family: 'Oxygen', sans-serif;",
	"Source Sans Pro" : "font-family: 'Source Sans Pro', sans-serif;",
	"Playfair Display" : "font-family: 'Playfair Display', serif;",
};

const previewBox = (font) => {
	return `
	<div class="preview-wrapper">
		<h5 class="d-block" style="color:blue;">${font[0]}</h5>
		<div class="preview-box preview-box-front">
			<div class="front-logo-row">
				<img class="d-block m-auto" src="assets/img/nan_h.png"/>
			</div>
			<div class="front-details">
				<div class="headshot-wrapper">
					<img src="assets/img/headshot.png">
				</div>
				<div class="details-wrapper">
					<h5 style="${font[1]}"><b>Agent Name</b></h5>
					<p class="small" style="${font[1]}">REALTOR ASSOCIATE</p>
				</div>
			</div>
		</div>
		<div class="preview-box" class="d-flex">
			<img class="d-block m-auto" src="assets/img/nan_h.png"/>
			<h4 class="text-center" style="${font[1]}"><b>Your Trusted Real Estate Experts</b></h4>
		</div>
	</div>
	`
}

for (let font of Object.entries(fonts)) {
	console.log(font)
	$('#preview').append(previewBox(font));
}