{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
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
{% endblock %}
