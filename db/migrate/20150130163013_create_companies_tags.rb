class CreateCompaniesTags < ActiveRecord::Migration
  def change
    create_table :companies_tags, :id => false do |t|
      t.references :company, :tag
    end

    add_index :companies_tags, [:company_id, :tag_id],
      name: "companies_tags_index",
      unique: true
  end
end
