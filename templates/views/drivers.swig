{% import "../mixins/flash-messages.swig" as FlashMessages %}

<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title>{{ title|default("dritgo") }}</title>
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

		<link href="/styles/site.css" rel="stylesheet">
        <link href="/styles/lib/bootstrap-datetimepicker.min.css" rel="stylesheet">

		{%- if user and user.canAccessKeystone -%}
			<link href="/keystone/styles/content/editor.min.css" rel="stylesheet">
		{%- endif -%}

		{# HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
		   Safely remove this block if you are not targeting IE8 #}
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->

		{# Include template-specific stylesheets by extending the css block #}
		{%- block css %}{% endblock -%}

		{# Add any other template-specific HEAD tags by extending the head block #}
		{%- block head %}{% endblock %}
	</head>
	<body>

		{# HEADER #}
		<div id="header" class="container">

			{# Customise your site"s navigation by changing the navLinks Array in ./routes/middleware.js
			   ... or completely change this header to suit your design. #}
			<div role="navigation" class="navbar">
				<div class="container-fluid">
					<div class="navbar-header">
						<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a id='logo' class="navbar-brand" href="/">dritgo</a>
					</div>
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-left">
							{%- for link in navLinks -%}
								{%- set linkClass = '' -%}
								{%- if link.key == section -%}
									{%- set linkClass = ' class="active"' -%}
								{%- endif %}
								<li{{ linkClass | safe }}>
									<a href="{{ link.href }}">{{ link.label }}</a>
								</li>
							{%- endfor %}
						</ul>
						<ul class="nav navbar-nav navbar-right">
							{% if user -%}
								{%- if user.canAccessKeystone -%}
									<li><a href="/keystone">Open Keystone</a></li>
								{%- endif -%}
								<li><a href="/keystone/signout">Sign Out</a></li>
							{%- else -%}
								<li><a href="/keystone/signin">Sign In</a></li>
							{%- endif %}
						</ul>
					</div>
				</div>
			</div>
		</div>

		{# BODY #}
		<div id="driver-body">
            <form class="row" action="/find" method="POST">
                <div class='col-md-3 col-md-offset-3'> 
                    <div class='input-group date' id='dateFrom'>
                        <span class="input-group-addon">
                            From: 
                        </span>
                        <input id="inputDateFrom" type='text' class="form-control" placeholder="Date From" value="{{dateFrom}}" />
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
                        <input id="inputDateTo" type='text' class="form-control" placeholder="Date To" value="{{dateTo}}" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                </div>
                <button id="find" type="submit" class="btn btn-default">Find</button>
            </form>
			<div id="dvDrivers" class="row">
				{%- for driver in drivers -%}
                <div class="col-lg-4">
                  <img class="img-rounded" src="{{ driver.imgUrl }}" alt="Generic placeholder image" width="220" height="160">
                  <h2>{{ driver.name.last }} {{ driver.name.first }}</h2>
                  <p>{{ driver.description }}</p>
                  <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                </div>
                {%- endfor %}
            </div>
		</div>

		{# FOOTER #}
		<div id="driver-footer" class="container">
			{# You don"t _have_ to include a link saying your site is powered by KeystoneJS, but we appreciate it! #}      <div class="row">
                <div class="col-md-4">
                    <p>Contact us via <a href="mailto:wlgq@hotmail.com" target="_blank">Email</a>.</p>
                </div>
                <div class="col-md-4">
                
                </div>
                <div class="col-md-4">
                    <a class="pull-right" href="#logo">Back To Top</a>
                </div>
            </div>	
		</div>

		{# JAVASCRIPT #}

		{# jQuery 1.11.1 is included by default, and required by both Bootstrap
			and the KeystoneJS Content Editor. If you are not targeting IE8,
			you can upgrade to 2.1.1 (also bundled) for better performance. #}
		<script src="/js/lib/jquery/jquery-1.11.1.min.js"></script>

		{# Customise which Bootstrap javascript files are served by including
			them specifically here, instead of bootstrap-3.2.0.min.js #}
		<script src="/js/lib/bootstrap/bootstrap-3.2.0.min.js"></script>
        <script src="/js/lib/bootstrap/collapse.js"></script>
        <script src="/js/lib/bootstrap/transition.js"></script>
        <script src="/js/lib/moment.min.js"></script>
        <script src="/js/lib/vue.min.js"></script>
        <script src="/js/lib/bootstrap/bootstrap-datetimepicker.min.js"></script>

		{# The KeystoneJS Content Editor provides support for ks-editable data attributes,
			which generate links to edit content for users who can access Keystone #}
		{% if user and user.canAccessKeystone -%}
			<script src="/keystone/js/content/editor.js"></script>
		{%- endif -%}

		{# Add scripts that are globally required by your site here. #}
            <script src="/js/driverpage.js"></script>
		{# Include template-specific javascript files by extending the js block #}
		{%- block js -%}{%- endblock -%}
	</body>
</html>
