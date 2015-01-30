json.array!(@tags) do |tag|
  json.extract! tag, :id, :name, :companies
  json.url tag_url(tag, format: :json)
end
