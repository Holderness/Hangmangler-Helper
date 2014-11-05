class CreateHangmansTable < ActiveRecord::Migration
  def change
  	create_table :hangmans do |t|
  		t.references :word
  		t.references :user
  		t.boolean :complete

  		t.timestamps
  	end
  end
end