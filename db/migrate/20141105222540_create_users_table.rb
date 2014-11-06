class CreateUsersTable < ActiveRecord::Migration
  def change
  	create_table :users do |t|
      t.string :username, null: :false
      t.string :password_hash, null: :false
      t.references :hangmans_won
      t.references :tic_tac_toes_won

      t.timestamps
    end
  end
end
