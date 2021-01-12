 <?php require APPROOT . '/views/inc/header.php'; ?>

<body>


    <!-- This code is use for color chooser, you can delete -->
    <div id="switch-color" class="color-switcher">
        <div class="open"><i class="fas fa-cog"></i></div>
        <h4>COLOR OPTION</h4>
        <ul>
            <li><a class="color-2" onclick="setActiveStyleSheet('color-2'); return false;" href="#"><i class="fas fa-cog"></i></a> </li>
            <li><a class="color-3" onclick="setActiveStyleSheet('color-3'); return false;" href="#"><i class="fas fa-cog"></i></a> </li>
            <li><a class="color-4" onclick="setActiveStyleSheet('color-4'); return false;" href="#"><i class="fas fa-cog"></i></a> </li>
            <li><a class="color-5" onclick="setActiveStyleSheet('color-5'); return false;" href="#"><i class="fas fa-cog"></i></a> </li>
        </ul>
    </div>
    <div class="clearfix"></div>


    <div class="wrapper">
        <div class="steps-area steps-area-fixed">
            <div class="image-holder">
                <img src="<?= URLROOT ?>/public/img/side-img.jpg" alt="">
            </div>
            <div class="steps clearfix">
                <ul class="tablist multisteps-form__progress">
                    <li class="multisteps-form__progress-btn js-active current">
                        <span>1</span>
                    </li>
                    <li class="multisteps-form__progress-btn">
                        <span>2</span>
                    </li>
                    <li class="multisteps-form__progress-btn">
                        <span>3</span>
                    </li>
                    <li class="multisteps-form__progress-btn last">
                        <span>4</span>
                    </li>
                </ul>
            </div>
        </div>
        <form class="multisteps-form__form" action="#" id="wizard" method="POST">
            <div class="form-area position-relative">
                <!-- div 2 -->
                <div class="multisteps-form__panel js-active" data-animation="slideHorz">
                    <div class="wizard-forms">
                        <div class="inner pb-100 clearfix">
                            <div class="form-content pera-content">
                                <div class="step-inner-content">
                                    <span class="step-no bottom-line">Step 1</span>
                                    <div class="step-progress float-right">
                                        <span>1 of 4 completed</span>
                                        <div class="step-progress-bar">
                                            <div class="progress">
                                                <div class="progress-bar"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2>Personal information</h2>
                                    <p></p>

                                    <div class="form-inner-area">
                                        <input type="text" name="fname" class="form-control required" minlength="2" placeholder="First name *" required>
                                        <input type="text" name="sname" class="form-control required" minlength="2" placeholder="Second name *" required>
                                        <input type="email" name="email" class="form-control required" placeholder="Email Address *" required>
                                        <input type="number" name="phone" placeholder="Phone" class="required" required>
                                    </div>
                                    <div class="gender-selection">
                                        <h3>Gender:</h3>
                                        <label>
                                            <input type="radio" name="gender" value="Male" class="requied">
                                            <span class="checkmark"></span>Male
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="Female">
                                            <span class="checkmark"></span>Female
                                        </label>
                                    </div>
                                    <div class="form-inner-area">
                                        <input type="date" name="birthdate" class="form-control required" placeholder="date of birth *" required>
                                        <input type="text" name="city" class="form-control required" placeholder="City of birth *" required>
                                        <input type="text" name="adress" class="form-control required" placeholder="Current adress *" required>
                                        <input type="text" name="passport" class="form-control required" placeholder="Passport Number *" required>
                                        <input type="date" name="passport_issue" class="form-control required" placeholder="Passport issue date *" required>
                                        <input type="date" name="passport_expiry" class="form-control required" placeholder="Passport expiry date *" required>
                                    </div>
                                    <div class="gender-selection">
                                        <h3>Already Studied In china? :</h3>
                                        <label>
                                            <input type="radio" name="studied" value="yes">
                                            <span class="checkmark"></span>Yes
                                        </label>
                                        <label>
                                            <input type="radio" name="studied" value="no">
                                            <span class="checkmark"></span>No
                                        </label>
                                    </div>
                                    <div class="form-inner-area gender-selection">
                                        <h3>If yes :</h3>
                                        <div class="form-inner-area">
                                            <input type="text" name="studied_city" class="form-control " minlength="2" placeholder="Which city? ">
                                            <input type="text" name="studied_university" class="form-control " minlength="2" placeholder="Which university? ">
                                            <input type="text" name="studied_major" class="form-control " minlength="2" placeholder="Which major? ">
                                        </div>
                                    </div>

                                    <div class="upload-documents">
                                        <h3>Upload you image:</h3>
                                        <div class="upload-araa bg-white">
                                            <input type="hidden" value="" name="fileContent" id="fileContent">
                                            <input type="hidden" value="" name="filename" id="filename">
                                            <div class="upload-icon float-left">
                                                <i class="fas fa-cloud-upload-alt"></i>
                                            </div>
                                            <div class="upload-text">
                                                <span>( File accepted: pdf. doc/ docx -
                                                    Max file size : 150kb for demo limit )</span>
                                            </div>
                                            <div class="upload-option text-center">
                                                <label for="attach">Upload The Documents</label>
                                                <input id="attach" style="visibility:hidden;" type="file">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.inner -->
                    <div class="actions">
                        <ul>
                            <li class="disable" aria-disabled="true"><span class="js-btn-next" title="NEXT">Backward <i class="fa fa-arrow-right"></i></span></li>
                            <li><span class="js-btn-next" title="NEXT">NEXT <i class="fa fa-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
                <!-- div 3 -->
                <div class="multisteps-form__panel" data-animation="slideHorz">
                    <div class="wizard-forms">
                        <div class="inner pb-100 clearfix">
                            <div class="form-content pera-content">
                                <div class="step-inner-content">
                                    <span class="step-no bottom-line">Step 2</span>
                                    <div class="step-progress float-right">
                                        <span>2 of 4 completed</span>
                                        <div class="step-progress-bar">
                                            <div class="progress">
                                                <div class="progress-bar" style="width:50%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Family information</h2>
                                    <p></p>
                                    <div class="form-inner-area">
                                        <input type="text" name="father_fname" class="form-control  required" minlength="2" placeholder="Father's first name *" >
                                        <input type="text" name="father_sname" class="form-control required " minlength="2" placeholder="Father'd last name *">
                                        <input type="text" name="father_occupation" class="form-control required " placeholder="Father's occupation *">
                                        <input type="number" name="father_phone" placeholder="Father's phone number" class="">
                                        <input type="text" name="mother_fname" class="form-control required " minlength="2" placeholder="Father's first name *">
                                        <input type="text" name="mother_sname" class="form-control required " minlength="2" placeholder="Father'd last name *">
                                        <input type="text" name="mother_occupation" class="form-control required " placeholder="Father's occupation *">
                                        <input type="number" name="mother_phone" placeholder="Mother's phone number" class="">

                                    </div>
                                    <!-- <div class="services-select-option">
                                    <ul>
                                        <li class="bg-white active"><label>Web Design <input type="radio" name="web_service" value="Web Design" checked></label></li>
                                        <li class="bg-white"><label>Web Development <input type="radio" name="web_service" value="Web Development"></label></li>
                                        <li class="bg-white"><label>Graphics Design <input type="radio" name="web_service" value="Graphics Design"></label></li>
                                        <li class="bg-white"><label>SEO <input type="radio" name="web_service" value="SEO"></label></li>
                                    </ul>
                                </div>
                                <div class="language-select">
                                    <p>I want to browse projects in the following languages: </p>
                                    <select name="languages">
                                        <option>English</option>
                                        <option>Arabic</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                                <div class="comment-box">
                                    <p><i class="fas fa-comments"></i> Write Somthing note</p>
                                    <textarea name="full_comments" placeholder="Write here"></textarea>
                                </div> -->
                                </div>
                            </div>
                        </div>
                        <!-- ./inner -->
                        <div class="actions">
                            <ul>
                                <li><span class="js-btn-prev" title="BACK"><i class="fa fa-arrow-left"></i> BACK </span></li>
                                <li><span class="js-btn-next" title="NEXT">NEXT <i class="fa fa-arrow-right"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- div 4 -->
                <div class="multisteps-form__panel" data-animation="slideHorz">
                    <div class="wizard-forms">
                        <div class="inner pb-100 clearfix">
                            <div class="form-content pera-content">
                                <div class="step-inner-content">
                                    <span class="step-no bottom-line">Step 3</span>
                                    <div class="step-progress float-right">
                                        <span>3 of 4 completed</span>
                                        <div class="step-progress-bar">
                                            <div class="progress">
                                                <div class="progress-bar" style="width:75%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Educational Background</h2>
                                    <p></p>
                                    <!-- <div class="step-content-area">
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
                                        <textarea name="comments-note" placeholder="Your Content Here"></textarea>
                                    </div>
                                </div> -->
                                    <div class="form-inner-area">
                                        <div class="d-flex">
                                            <input type="text" name="ed_from" class="form-control " minlength="2" placeholder="From *">
                                            <input type="text" name="ed_to" class="form-control " minlength="2" placeholder="To *">
                                            <input type="text" name="ed_institute" class="form-control " placeholder="Institute *">
                                            <input type="text" name="ed_degree" placeholder="Degree" class="">
                                            <input type="text" name="ed_major" class="form-control " minlength="2" placeholder="Major">
                                        </div>
                                        <div class="d-flex">
                                            <input type="text" name="ed_from" class="form-control " minlength="2" placeholder="From *">
                                            <input type="text" name="ed_to" class="form-control " minlength="2" placeholder="To *">
                                            <input type="text" name="ed_institute" class="form-control " placeholder="Institute *">
                                            <input type="text" name="ed_degree" placeholder="Degree" class="">
                                            <input type="text" name="ed_major" class="form-control " minlength="2" placeholder="Major">
                                        </div>
                                        <div class="d-flex">
                                            <input type="text" name="ed_from" class="form-control " minlength="2" placeholder="From *">
                                            <input type="text" name="ed_to" class="form-control " minlength="2" placeholder="To *">
                                            <input type="text" name="ed_institute" class="form-control " placeholder="Institute *">
                                            <input type="text" name="ed_degree" placeholder="Degree" class="">
                                            <input type="text" name="ed_major" class="form-control " minlength="2" placeholder="Major">
                                        </div>
                                    </div>
                                    <h2>Professional Background</h2>
                                    <p></p>
                                    <div class="form-inner-area">
                                        <div class="d-flex">
                                            <input type="text" name="pr_from" class="form-control " minlength="2" placeholder="From *">
                                            <input type="text" name="pr_to" class="form-control " minlength="2" placeholder="To *">
                                            <input type="text" name="pr_institute" class="form-control " placeholder="Institute *">
                                            <input type="text" name="pr_degree" placeholder="Department" class="">
                                            <input type="text" name="pr_major" class="form-control " minlength="2" placeholder="Post">
                                        </div>
                                        <div class="d-flex">
                                            <input type="text" name="pr_from" class="form-control " minlength="2" placeholder="From *">
                                            <input type="text" name="pr_to" class="form-control " minlength="2" placeholder="To *">
                                            <input type="text" name="pr_institute" class="form-control " placeholder="Institute *">
                                            <input type="text" name="pr_degree" placeholder="Department" class="">
                                            <input type="text" name="pr_major" class="form-control " minlength="2" placeholder="Post">
                                        </div>
                                        <div class="d-flex">
                                            <input type="text" name="pr_from" class="form-control " minlength="2" placeholder="From *">
                                            <input type="text" name="pr_to" class="form-control " minlength="2" placeholder="To *">
                                            <input type="text" name="pr_institute" class="form-control " placeholder="Institute *">
                                            <input type="text" name="pr_degree" placeholder="Department" class="">
                                            <input type="text" name="pr_major" class="form-control " minlength="2" placeholder="Post">
                                        </div>
                                    </div>
                                </div>
                                <h3>Do you have a language certificate? (TOEFL/ IELTS/ HSK ...)</h3>
                                <div class="form-inner-area">
                                    <input type="text" name="certif" placeholder="..." class="">

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
                                    <span class="step-no bottom-line">Step 4</span>
                                    <div class="step-progress float-right">
                                        <span>4 of 4 completed</span>
                                        <div class="step-progress-bar">
                                            <div class="progress">
                                                <div class="progress-bar" style="width:100%"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Study plan</h2>
                                    <p></p>
                                    <div class="step-content-field">
                                        <div class="gender-selection">
                                            <h3>Degree</h3><br>
                                            <p></p>
                                            <label>
                                                <input type="radio" name="plan" value="bachelor">
                                                <span class="checkmark"></span>Bachelor
                                            </label>
                                            <label>
                                                <input type="radio" name="plan" value="master">
                                                <span class="checkmark"></span>Master
                                            </label>
                                            <label>
                                                <input type="radio" name="plan" value="phd">
                                                <span class="checkmark"></span>Phd
                                            </label>
                                            <label>
                                                <input type="radio" name="plan" value="nodegree">
                                                <span class="checkmark"></span>No degree (Chinese Language)
                                            </label>
                                        </div>
                                        <div class="form-inner-area">
                                            <input type="text" name="plan_major" class="form-control " minlength="2" placeholder="Major *">
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.inner -->
                        <div class="actions">
                            <ul>
                                <li><span class="js-btn-prev" title="BACK"><i class="fa fa-arrow-left"></i> BACK </span></li>
                                <li><button type="submit" title="NEXT">SUBMIT <i class="fa fa-arrow-right"></i></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>
<?php require APPROOT . '/views/inc/footer.php'; ?>