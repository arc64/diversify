class Company < ActiveRecord::Base
  has_and_belongs_to_many :tags
	# string :name
	# array :tags
	# string :address
	# float :latitude
	# float :longitude
end