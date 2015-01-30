json.array!(@companies) do |company|
  json.extract! company, :id, :name, :tags, :address, :latitude, :longitude, :image_url
  json.url company_url(company, format: :json)
end
