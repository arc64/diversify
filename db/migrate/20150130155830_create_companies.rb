class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :address
      t.float :rating
      t.float :latitude
      t.float :longitude

      t.timestamps null: false
    end
  end
end
