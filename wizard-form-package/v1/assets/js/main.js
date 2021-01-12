$(function() {

	// Select Dropdown
	$('html').on('click', function() {
		$('.select .dropdown').hide();
	});
	$('.select').on('click', function(event) {
		event.stopPropagation();
	});
	$('.select .select-control').on('click', function() {
		$(this).parent().next().toggle();
	})
	$('.select .dropdown li').on('click', function() {
		$(this).parent().toggle();
		var text = $(this).attr('rel');
		$(this).parent().prev().find('div').text(text);
	})

	// date picker
	$('.datepicker').datepicker({
		clearBtn: true,
		format: "dd/mm/yyyy"
	});


	$(".step-box-content ").on('click', function() {

		$(".step-box-content").removeClass("active");
		$(this).addClass("active");
	});

	$(".services-select-option li").on('click', function() {

		$(".services-select-option li").removeClass("active");
		$(this).addClass("active");
	});

	$(".opti-list ul li").on('click', function(e) {
		$(this).find('input[type=checkbox]').prop("checked", !$(this).find('input[type=checkbox]').prop("checked"));

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});

	$('input[type=checkbox]').click(function(e) {
		e.stopPropagation();
		return true;
	});

	$(".plan-icon-text").on('click', function() {
		$(this).find('input[type=radio]').prop("checked", true);
		$(".plan-icon-text").removeClass("active");
		$(this).addClass("active");
	});



	//multi form ===================================
	//DOM elements
	const DOMstrings = {
		stepsBtnClass: 'multisteps-form__progress-btn',
		stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
		stepsBar: document.querySelector('.multisteps-form__progress'),
		stepsForm: document.querySelector('.multisteps-form__form'),
		stepFormPanelClass: 'multisteps-form__panel',
		stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
		stepPrevBtnClass: 'js-btn-prev',
		stepNextBtnClass: 'js-btn-next'
	};


	//remove class from a set of items
	const removeClasses = (elemSet, className) => {

		elemSet.forEach(elem => {

			elem.classList.remove(className);

		});

	};

	//return exect parent node of the element
	const findParent = (elem, parentClass) => {

		let currentNode = elem;

		while (!currentNode.classList.contains(parentClass)) {
			currentNode = currentNode.parentNode;
		}

		return currentNode;

	};

	//get active button step number
	const getActiveStep = elem => {
		return Array.from(DOMstrings.stepsBtns).indexOf(elem);
	};

	//set all steps before clicked (and clicked too) to active
	const setActiveStep = activeStepNum => {

		//remove active state from all the state
		removeClasses(DOMstrings.stepsBtns, 'js-active');
		removeClasses(DOMstrings.stepsBtns, 'current');
		
		//set picked items to active
		DOMstrings.stepsBtns.forEach((elem, index) => {
			if (index <= activeStepNum) {
				elem.classList.add('js-active');
				$(elem).addClass(index);

			}

			if (index == activeStepNum) {
				elem.classList.add('current');
			}


		});
	};

	//get active panel
	const getActivePanel = () => {

		let activePanel;

		DOMstrings.stepFormPanels.forEach(elem => {

			if (elem.classList.contains('js-active')) {

				activePanel = elem;

			}

		});

		return activePanel;

	};

	//open active panel (and close unactive panels)
	const setActivePanel = activePanelNum => {

		const animation = $(DOMstrings.stepFormPanels, 'js-active').attr("data-animation");

		//remove active class from all the panels
		removeClasses(DOMstrings.stepFormPanels, 'js-active');
		removeClasses(DOMstrings.stepFormPanels, animation);
		removeClasses(DOMstrings.stepFormPanels, 'animate__animated');

		//show active panel
		DOMstrings.stepFormPanels.forEach((elem, index) => {
			if (index === activePanelNum) {

				elem.classList.add('js-active');
				// stepFormPanels
				elem.classList.add('animate__animated', animation);

				setTimeout(function() {
					removeClasses(DOMstrings.stepFormPanels, 'animate__animated', animation);
				}, 1200);

				setFormHeight(elem);

			}
		});

	};


	//set form height equal to current panel height
	const formHeight = activePanel => {

		const activePanelHeight = activePanel.offsetHeight;

		DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

	};

	const setFormHeight = () => {
		const activePanel = getActivePanel();

		formHeight(activePanel);
	};

	//STEPS BAR CLICK FUNCTION
	DOMstrings.stepsBar.addEventListener('click', e => {

		//check if click target is a step button
		const eventTarget = e.target;

		if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
			return;
		}

		//get active button step number
		const activeStep = getActiveStep(eventTarget);

		//set all steps before clicked (and clicked too) to active
		// setActiveStep(activeStep);

		//open active panel
		// setActivePanel(activeStep);
	});

	//PREV/NEXT BTNS CLICK
	DOMstrings.stepsForm.addEventListener('click', e => {

		const eventTarget = e.target;

		//check if we clicked on `PREV` or NEXT` buttons
		if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
			return;
		}

		//find active panel
		const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

		let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

		
		//set active step and active panel onclick
		if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ) {
			activePanelNum--;

			setActiveStep(activePanelNum);
			setActivePanel(activePanelNum);

		} else if(eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)  ) { 
			//if(eventTarget.id === 'submitButtonFinal')
			//   alert("Clicked!");
			console.log(eventTarget.id);
		let form;
		let tagId;
		if (eventTarget.id === 'submitButton-0')
			tagId= '#wizard-0';
		else if (eventTarget.id === 'submitButton-1')
			tagId= '#wizard-1';
		form = $(`${tagId}`);
		form.validate();
		console.log(form.valid());
		
		var parent_fieldset = $('.multisteps-form__panel.js-active');
		var next_step = true;
		
		parent_fieldset.find('.required').each( function(index, value){
            var form = $(`#${value.id}`);
			//value.validate();
			console.log(form);
			console.log(`#${value.id}`);
            if (form.valid() === false) {
                next_step = false;
				$(this).addClass('custom-select is-invalid');
			}
			else
				$(this).removeClass('custom-select is-invalid');
		}); 
		/*
		parent_fieldset.find('.required').each( function(){
            var form = $('.required');
            form.validate();
            if (form.valid() === false) {
                next_step = false;
				$(this).addClass('custom-select is-invalid');
			}
			else
				$(this).removeClass('custom-select is-invalid');
        });
		*/
		if(next_step === true || form.valid() === true) {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			activePanelNum++;
			setActiveStep(activePanelNum);
			setActivePanel(activePanelNum);
		}


	} 
	

});

	//SETTING PROPER FORM HEIGHT ONLOAD
	window.addEventListener('load', setFormHeight, true);

	//SETTING PROPER FORM HEIGHT ONRESIZE
	window.addEventListener('resize', setFormHeight, true);
})

/*

	<!-- div 2 -->
				
				<!-- div 3 -->
				
				<!-- div 4 -->
				<div class="multisteps-form__panel" data-animation="slideHorz">
					<div class="wizard-forms">
						<div class="inner pb-100 clearfix">
							<div class="form-content pera-content">
								<div class="step-inner-content">
									<span class="step-no bottom-line">Step 4</span>
									<div class="step-progress float-right">
										<span>4 of 5 completed</span>
										<div class="step-progress-bar">
											<div class="progress">
												<div class="progress-bar" style="width:70%"></div>
											</div>
										</div>
									</div>
									<h2>What kind of services You Need</h2>
									<p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
									<div class="step-content-area">
										<div class="budget-area">
											<p><i class="fas fa-dollar-sign"></i> Budget</p>
											<select name="budget">
												<option>$390 - $600</option>
												<option>$390 - $600</option>
												<option>$390 - $600</option>
												<option>$390 - $600</option>
												<option>$390 - $600</option>
											</select>
										</div>
										<div class="budget-area">
											<p><i class="fas fa-comments"></i> Required Support</p>
											<select name="support_period">
												<option>2 to 6 month</option>
												<option>2 to 6 month</option>
												<option>2 to 6 month</option>
												<option>2 to 6 month</option>
												<option>2 to 6 month</option>
											</select>
										</div>
										<div class="budget-area">
											<p>Optimization and Accessibility</p>
											<div class="opti-list">
												<ul class="d-flex">
													<li class="bg-white active"><input type="checkbox" name="code_opti1" value="Semantic coding" checked>Semantic coding</li>
													<li class="bg-white"><input type="checkbox" name="code_opti2" value="Mobile APP">Mobile APP</li>
													<li class="bg-white"><input type="checkbox" name="code_opti3" value="Mobile Design">Mobile Design</li>
												</ul>
											</div>
										</div>
										<div class="comment-box">
											<p><i class="fas fa-comments"></i> Write Somthing note</p>
											<textarea name="comments-note" placeholder="Your Content Here" class="required"></textarea>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- /.inner -->
						<div class="actions">
							<ul>
								<li><span class="js-btn-prev" title="BACK"><i class="fa fa-arrow-left"></i> BACK </span></li>
								<li><span class="js-btn-next" title="NEXT">NEXT <i class="fa fa-arrow-right"></i></span></li>
							</ul>
						</div>
					</div>
				</div>
				<!-- div 5 -->
				<div class="multisteps-form__panel" data-animation="slideHorz">
					<div class="wizard-forms">
						<div class="inner pb-100 clearfix">
							<div class="form-content pera-content">
								<div class="step-inner-content">
									<span class="step-no bottom-line">Step 5</span>
									<div class="step-progress float-right">
										<span>5 of 5 completed</span>
										<div class="step-progress-bar">
											<div class="progress">
												<div class="progress-bar" style="width:100%"></div>
											</div>
										</div>
									</div>
									<h2>Complete Final Step</h2>
									<p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
									<div class="step-content-field">
										<div class="date-picker date datepicker">
											<input type="text" name="date" class="form-control">
											<div class="input-group-append"><span>ADD TIME</span></div>
										</div>
										<div class="plan-area">
											<div class="plan-icon-text text-center active">
												<div class="plan-icon">
													<i class="fas fa-chess-queen"></i>
												</div>
												<div class="plan-text">
													<h3>Unlimited Plan</h3>
													<p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
													<input type="radio" name="your_plan" value="Unlimited Plan" checked="">
												</div>
											</div>
											<div class="plan-icon-text text-center">
												<div class="plan-icon">
													<i class="fas fa-cubes"></i>
												</div>
												<div class="plan-text">
													<h3>Limited Plan</h3>
													<p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, dicit viderer evertitur</p>
													<input type="radio" name="your_plan" value="Unlimited Plan">
												</div>
											</div>
										</div>
										<div class="budget-area">
											<p>Optimization and Accessibility</p>
											<div class="opti-list">
												<ul class="d-flex">
													<li class="bg-white active"><input type="checkbox" name="code_opti1" value="Semantic coding" checked>Semantic coding</li>
													<li class="bg-white"><input type="checkbox" name="code_opti2" value="Mobile APP">Mobile APP</li>
													<li class="bg-white"><input type="checkbox" name="code_opti3" value="Mobile Design">Mobile Design</li>
												</ul>
											</div>
										</div>
										<div class="comment-box">
											<textarea name="extra-message" placeholder="Some Note"></textarea>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- /.inner -->
						<div class="actions">
							<ul>
								<li><span class="js-btn-prev" title="BACK"><i class="fa fa-arrow-left"></i> BACK </span></li>
								<li><button id="submitButtonFinal" type="submit" title="NEXT">SUBMIT <i class="fa fa-arrow-right"></i></button></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</form>

*/