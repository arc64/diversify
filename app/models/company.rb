class Company < ActiveRecord::Base
	# string :name
	# array :tags
	# string :address
	# float :latitude
	# float :longitude
	has_many :reviews
	has_many_and_belongs_to_many :tags
end