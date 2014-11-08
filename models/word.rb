class Word < ActiveRecord::Base
	has_many :hangmen
	has_many :users, through: :hangmen

end