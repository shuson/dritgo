{% extends "../layouts/default.swig" %}

{% block content %}
    <div class="carousel-copy">
        <div class="carousel-cta">
            <h2 id="welcome">Welcome, look for a driver:</h2>
            <form action="/find" method="POST">
                <div class='col-md-3 col-md-offset-3'> 
                    <div class='input-group date' id='dateFrom'>
                        <span class="input-group-addon">
                            From: 
                        </span>
                        <input id="inputDateFrom" type='text' name="dateFrom" class="form-control" placeholder="Date From" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div class='input-group date' id='dateTo'>
                        <span class="input-group-addon">
                            To: 
                        </span>
                        <input id="inputDateTo" type='text' name="dateTo" class="form-control" placeholder="Date To" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
                <button id="find" type="submit" class="btn btn-default">Find</button>
            </form>
        </div>
    </div>
    <div id="carousel-homepage" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-homepage" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-homepage" data-slide-to="1"></li>
        <li data-target="#carousel-homepage" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="/images/bg1.jpg" alt="name1">
          <div class="carousel-caption">
            
          </div>
        </div>
        <div class="item">
          <img src="/images/bg2.jpg" alt="name2">
          <div class="carousel-caption">
            
          </div>
        </div>
        <div class="item">
          <img src="/images/bg3.jpg" alt="name3">
          <div class="carousel-caption">
            
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-homepage" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-homepage" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
{% endblock %}
