class AddImageDomainToCompany < ActiveRecord::Migration
  def change
    add_column :companies, :image_url, :string
    add_column :companies, :domain, :string
  end
end
