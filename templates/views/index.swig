{% extends "../layouts/default.swig" %}

{% block content %}
	<div class="container">
        <h2 id="welcome">Welcome, look for a driver:</h2>
        <div class='col-md-3 col-md-offset-3'>
            <div class="form-group">    
                <div class='input-group date' id='dateFrom'>
                    <input type='text' class="form-control" placeholder="Date From" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <div class='col-md-3'>
            <div class="form-group">
                <div class='input-group date' id='dateTo'>
                    <input type='text' class="form-control" placeholder="Date To" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        </div>
        <button class="btn btn-default">Find</button>
	</div>
{% endblock %}
