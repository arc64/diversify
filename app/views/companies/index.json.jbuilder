json.array!(@companies) do |company|
  json.extract! company, :id, :name, :tags, :address, :latitude, :longitude
  json.url company_url(company, format: :json)
end
