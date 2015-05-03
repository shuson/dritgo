exports.to_json = function(object) {

  var cities    = (object.area != undefined) ? object.area.map(function(item){ return item.name; }) : [] ;
  var vehicles  = (object.vehicle != undefined) ? object.vehicle.map(function(item){ return item.name; }) : [] ;
  var languages_written = (object.language_written != undefined) ? object.language_written.map(function(item) { return item.name; }) : [] ;
  var languages_spoken  = (object.language_spoken != undefined) ? object.language_spoken.map(function(item) { return item.name; }) : [] ;

  return {
    id:                 object.id,
    first_name:         object.name.first,
    last_name:          object.name.last,
    nickname:           object.nickname,
    available:          object.available,
    short_desc:         object.short_desc,
    description:        object.description,
    phone:              object.phone,
    email:              object.email,
    available:          object.available,
    driving_years:      object.driving_years,
    source_url:         object.driverSourceUrl,
    avatar_url:         object.imgUrl.url,
    video_url:          object.videoUrl,
    facebook_url:       object.facebook,
    wechat_id:          object.wechat,
    whatsapp_id:        object.whatsapp,
    cities:             cities,
    vehicles:           vehicles,
    languages_spoken:   languages_spoken,
    languages_written:  languages_written,
    address:            object.address,
    created_at:         object.createdAt
  };
};
