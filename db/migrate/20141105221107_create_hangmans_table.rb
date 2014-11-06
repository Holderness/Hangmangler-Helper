class CreateHangmansTable < ActiveRecord::Migration
  def change
  	create_table :hangmans do |t|
  		t.references :word
  		t.references :user
  		t.string :incorrect_guesses
  		t.string :game_state
  		t.boolean :complete

  		t.timestamps
  	end
  end
end