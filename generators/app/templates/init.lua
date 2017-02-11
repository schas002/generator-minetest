MODNAME = "<%= modname %>"
VERSION = "<%= "1/" + new Date().toISOString().substring(2, 10).replace(/-/g, "") %>"

print(MODNAME .. " version " .. VERSION .. " up")
print("Powered by the bedazzling generator-minetest") -- You may remove this
                                                      -- line, if you want
